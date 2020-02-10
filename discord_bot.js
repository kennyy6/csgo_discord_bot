//const {DISCORD, Attachment} = require("discord.js");
const Discord = require('discord.js');
const axios = require('axios');
const {Client, Attachment} = require('discord.js');
const bot = new Client();







// check the msgs sent
bot.on('message', async (message)=>{
    var firstElemString = message.content.charAt(0);
    message.reply(message.content);
        //if (firstElemString == '!'){


        // var attachment1 = new Attachment("https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE")

        // message.channel.send(message.author,attachment1);
        // message.reply("https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE");
        //message.reply("pong");
        // message.channel.sendMessage(message.content);


        

        // testAPI();} 

    if (message.content == '!joke'){
        let getJoke = async () =>{
            let response = await axios.get("https://official-joke-api.appspot.com/random_joke"); // await will wait till variables get sent
            let joke = response.data;
            return joke
        }
        let jokeValue = await getJoke();
        message.reply(jokeValue);
    }

});

function testAPI(){
    // loadJSON("https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=M4A4%20%7C%20Tornado%20%28Well-Worn%29",funreply)
}
function funreply(data){
    message.reply(data);
}


bot.login('NjcwOTMwMDc5NjcyNTY1Nzcw.Xi1jGA._QWeyaEenM1oZgFiEkkXRHCy1A4');

