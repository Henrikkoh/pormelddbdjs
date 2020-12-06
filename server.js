const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "(your bot token)", 
prefix: "(prefix you want)" 
})
 
bot.onMessage()
 
//shows bot ping in ms
bot.command({
name: "ping", 
code: `Pong! My ping is \`$ping\`ms` 
})

//say command with anti-@everyone or roles
bot.command({
name: "say", 
code: `
$onlyIf[$checkContains[$message;test;@here;@everyone;<@&]==false;]
$message`

})

//bot status, customize it to what you want
bot.status({
  text: "over $allMembersCount robots and test subjects | p!help",
  type: "WATCHING/LISTENING/PLAYING/STREAMING",
  time: 12
})

//evaluate function command
bot.command({

name: "eval", 

code: `$eval[$message]
$onlyIf[$authorID==539427271698808845; Owner only command!]`

//help command with command list, modify to you own preference
})
bot.command({

name: "help", 

code: `$title[Pormeld Bot Help menu (WIP)]
$description[Hey there! I'm Pormeld the PMD bot and here are my commands:D


\`p!help:\` this help menu.
\`p!stats:\` return my stats such as memory usage.
\`p!ping:\` returns my ping in ms
\`p!say (message):\` makes me say your message.]
$footer[Pormeld PMD bot v0.5 Alpha | hk;https://i.imgur.com/Y4QTDET.jpg]
$color[#90ee90]`

})

bot.command({
name: "submitmod",
code: `$color[#90ee90]
$setUserVar[prog;1;$authorID]
$title[Submit Mod to PMD]
$description[To submit a mod to the Portal Mod Direct, use \`p!newmod (mod name)\`

At any time during the submission process you may use \`p!modcancel\` to cancel the submission process.]
$footer[Pormeld PMD bot v0.5 Alpha | hk;https://i.imgur.com/Vp76mpW.jpg]`
})
bot.command({
name: "modcancel",
code: `$color[#90ee90]`
})


bot.command({

name: "stats", 

code: `$color[#90ee90]
$title[Pormeld PMD bot stats]
$thumbnail[https://i.imgur.com/Vp76mpW.jpg]
$description[
**A multipurpose bot created for the Portal Mod Direct Discord server.**

**Name: Pormeld #6961**

Prefix: **\`p!\`**
Language: **\`English (UK)\`**

Bot ping: **\`$pingms\`**
Uptime: **\`$uptime\`**
Memory usage: **\`$ram\`**

Command no. : **\`$commandsCount\`**
Total number of members in PMD: **\`$allMembersCount\`**

Bot Version **v0.5 Alpha**
DBD.js version **1.0.1**

Developed by **Henrikkoh#3344**]
$footer[Pormeld PMD bot v0.5 Alpha | hk;https://i.imgur.com/Vp76mpW.jpg]

`

})




    


    


    

