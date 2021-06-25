const { loopStatus } = new (require('./lib/functions/requests'));
const { log, title, clear, processes } = new (require('./lib/log/console'));

clear();
log("Auto Bio","Developed By https://github.com/RudementalHack/AutoBio\n\n")
loopStatus();
title();
processes();
