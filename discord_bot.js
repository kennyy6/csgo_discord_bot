const {DISCORD, Attachment} = require("discord.js");


const bot = new Client();


// check the msgs sent
bot.on('message',(message)=>{
    var firstElemString = message.content.charAt(0);

    if (firstElemString == '!'){


        var attachment = new Attachment("http://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE")

        message.channel.send(message.author,attachment);
        //message.reply("pong");
        //message.channel.sendMessage(message.content);
    }

});


bot.login('NjcwOTMwMDc5NjcyNTY1Nzcw.Xi1jGA._QWeyaEenM1oZgFiEkkXRHCy1A4');

