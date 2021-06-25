# WORK IN PROGRESS - BETA

---

# Auto-Bio

Animate your DiscordBio/Banner.

#### _DISCLAIMER_
***I am not responsible for any bans resulting in using this. Use at your own risk.***

***This is still in BETA Mode as for the endpoint on the API***

#### Example Display
<!-- <img src="https://cdn.discordapp.com/attachments/805157329128783912/848797321449963540/unknown.png" alt="Example"></img> -->

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FRudementalHack%2FAutoBio&count_bg=%23B76E79&title_bg=%23555555&icon=riotgames.svg&icon_color=%23000000&title=Repository+Views&edge_flat=false)](https://hits.seeyoufarm.com)


---

# Requirements
- [NodeJS](https://nodejs.org/en/)
- [Basic JSON knowledge](https://www.json.org/)

# Installation
1. Download repository
2. Unzip
3. Open a command prompt inside the folder
4. Enter `npm install`
5. Adjust your `config.json` - [Read More](#Config)
6. Enter `node status.js` or `node .`

# Config
- token `String`: Enter your secret discord token **NEVER SHARE THIS WITH ANYONE** - [How to get your token](#how-to-get-your-token)
- handleRatelimit `Boolean`: Set to `true` to handle Discord ratelimits, the script will wait until the ratelimit expires instead of the `timeout` value (**This is untested, so it might not work**)
- animation `Array`:
	- text `String`: Text to display as custom status
	- banner `String|null`: banner url you want to display or `null` for nothing
	- timeout `Number`: Amount in **milliseconds** how long to wait before continuing to the next one (Note: Don't go below 10000ms)
	
# How to get your token
Go to Discord and open the developer console using `CTRL` + `SHIFT` + `I`, go to the console tab and enter this code
```JS
let myToken = webpackJsonp.push([[],{extra_id:(e,r,t)=>e.exports=t},[["extra_id"]]]);for(let e in myToken.c)if(myToken.c.hasOwnProperty(e)){let r=myToken.c[e].exports;if(r&&r.__esModule&&r.default)for(let e in r.default)"getToken"===e&&console.log(r.default.getToken())}
```

**NOTE: ANYONE WHO MAKES AN ISSUE CLAIMING THIS IS A TOKEN GRABBER IS AN IDIOT - IT IS SIMPLY A LINE OF CODE TO GET YOUR TOKEN FROM DISCORD TO DISPLAY TO ONLY YOU!**

It should now output your token which will look like random letters and numbers, etc. That is your token, put the **whole** thing as your token.
