const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "", 
prefix: "" 
})
 
bot.onMessage()
 
bot.command({
name: "ping", 
code: `Pong! My ping is \`$ping\`ms` 
})

bot.command({
name: "say", 
code: `
$onlyIf[$checkContains[$message;test;@here;@everyone;<@&]==false;]
$message`

})

bot.status({
  text: "over $allMembersCount robots and test subjects | p!help",
  type: "WATCHING",
  time: 12
})
bot.command({

name: "eval", 

code: `$eval[$message]
$onlyIf[$authorID==539427271698808845; Owner only command!]`

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
$title[Submit Mod to PMD]`
})
bot.command({

name: "evl", 

code: `$eval[$message]


$onlyIf[$authorID==513097616184311811; Locked command]`

})
bot.command({

name: "check",

code: `Input:

Is the phrase \`fragilistic\` in supercalifragilisticexpialidocious

Output:

$checkContains[supercalifragilisticexpialidocious;fragilistic]`

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
DBD.js version **0.6.5**

Developed by **Henrikkoh#3344**]
$footer[Pormeld PMD bot v0.5 Alpha | hk;https://i.imgur.com/Vp76mpW.jpg]

`

})




    


    


    

