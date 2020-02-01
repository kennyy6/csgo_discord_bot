const DISCORD = require("discord.js");


const bot = new DISCORD.Client();


// check the msgs sent
bot.on('message',(message)=>{
    if (message.content == 'ping'){
        message.reply("pong");
        //message.channel.sendMessage(message.content);
    }

});


bot.login('NjcwOTMwMDc5NjcyNTY1Nzcw.Xi1jGA._QWeyaEenM1oZgFiEkkXRHCy1A4');

