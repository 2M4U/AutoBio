const endpoint = "https://discord.com/api/v9/users/@me/settings";
const request = require("request");
const config = require("../settings/config.json");
const { log, error, warn } = new (require('../log/console'));
class Requests {

    async loopStatus() {
        if (!config.token) {
            error("INVALID TOKEN", 'Please Provide A Valid Token');
            return setTimeout(process.exit, 2000);
        }
        for (let anim of config.animation) {
            let res = new Requests().doRequest(anim.text, anim.banner).catch(console.error);
            log("CHANGE BIO", `Text: ${anim.text}, BannerURL: ${anim.banner}`)
            if (!res) {
                return;
            }
            await new Promise(p => setTimeout(p, anim.timeout));
        }
        new Requests().loopStatus();
    };

    doRequest(text, banner = null) {
        return new Promise((resolve, reject) => {
            request({
                method: "PATCH",
                uri: endpoint,
                headers: {
                    Authorization: config.token
                },
                json: {
                    bio: text,
                    banner: banner
                }
            }, (err, res, body) => {
                console.log(body)
                if (err) {
                    reject(err);
                    error("Request Error", err)
                    return;
                }

                if (res.statusCode === 200) {
                    resolve(true);
                    return;
                }

                if ((res.headers["X-RateLimit-Remaining"] || 0) <= 0 && (res.headers["X-RateLimit-Reset-After"] || 0) > 0 && config.handleRatelimit) {
                    let ratelimit = res.headers["X-RateLimit-Reset-After"] * 1000;
                    console.log("Hit ratelimit: " + ratelimit + "ms");
                    warn("Hit ratelimit", `${ratelimit}ms`);
                    setTimeout(() => {
                        doRequest(text, banner).then(resolve).catch(reject);
                    }, ratelimit);
                    return;
                }
                error("Invalid Status Code", res.statusCode);
                reject(new Error("Invalid Status Code: " + res.statusCode));
            });
        });
    }
}

module.exports = Requests;