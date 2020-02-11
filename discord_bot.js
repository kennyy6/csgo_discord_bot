//const {DISCORD, Attachment} = require("discord.js");
const Discord = require('discord.js');
const axios = require("axios");

const {Client, Attachment} = require('discord.js');
const bot = new Client();







// check the msgs sent
bot.on('message', async message=>{
    var firstElemString = message.content.charAt(0);
    //message.reply(message.content);
        //if (firstElemString == '!'){


        // var attachment1 = new Attachment("https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE")

        // message.channel.send(message.author,attachment1);
        // message.reply("https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09-5lpKKqP_xMq3I2D0B65Jy2b7FrNqgjQXn8hVvazj3J4OdIFRsY1nYrgDtxO27h8W5uZvXiSw07ljG5dE");
        //message.reply("pong");
        // message.channel.sendMessage(message.content);


        

        // testAPI();} 
    if (message.content == "!example" || message.content == "!help"){
        message.reply("!skins M4A4 | Asiimov (Field-Tested) is a command you should try ")
    }

    if (message.content == '!joke'){
        let getJoke = async () =>{
            let response = await axios.get("https://official-joke-api.appspot.com/random_joke"); // await will wait till variables get sent
             //console.log(response.data);
            
            let joke = response.data;
            return joke
        }
        let jokeValue = await getJoke();
        //console.log(jokeValue);
        message.reply(`Here is your joke:  \n  ${jokeValue.setup}\n ${jokeValue.punchline}` );
    }
    let skins_search = message.content.substring(0,6);
    if (skins_search == '!skins'){
        let skin_name =  message.content.substring(7,message.content.length);
        let baseURI = "https://steamcommunity.com/market/priceoverview/?currency=1&appid=730&market_hash_name=";
        skin_nameEncode = encodeURI(skin_name);

        let getPrice = async()=>{
            //console.log(baseURI+skin_name);
            let priceresponse = await axios.get(baseURI+skin_nameEncode);
            return priceresponse.data;
        }
        let flag = true;
        try{
        let priceValue = await getPrice();
        //console.log(flag);
        message.reply(`"The item requested: ${skin_name} \n Lowest Price ${priceValue.lowest_price}\n Volume: ${priceValue.volume}`);
        }
        catch(e){
        message.reply("Could not find the price");
        //console.log(e);
        let flag = false;

        }
        finally{

            }

        
    }


});



bot.login('NjcwOTMwMDc5NjcyNTY1Nzcw.Xi1jGA._QWeyaEenM1oZgFiEkkXRHCy1A4');

