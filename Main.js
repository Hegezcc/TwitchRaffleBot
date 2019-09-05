const BotLib = require("twitch-bot");
const CommandIndex = require("./cmd/CommandIndex.js");
const Enmap = require("enmap");

//Määritettävät arvot
const botusername = "";                               //Laita tähän botin käyttäjänimi, botilla oltava siis käyttäjä Twitchissä.
const secretKey = "";   //Tähän tulee botin oauth avain. Voit generoida sellaisen https://twitchapps.com/tmi/
const botadmins = ["tendrilll","insert_twitch_name_here"];  //Botin adminien usernamet tähän.
const prefix = "%";                                         //Botin prefix tähän, botti ignoraa viestit jotka eivät ala tällä.

const Bot = new BotLib({
    username: botusername,
    oauth: secretKey,
    channels: ["sekasingaming"] //Laita tähän kanavan nimi, jonne botin tahdot.
});

Bot.db = new Enmap({name: "database"});
Bot.channelName = "sekasingaming"; //Laita tähän kanavan nimi, jonne botin tahdot.

Bot.on("connected", ()=>{
    console.log("Connected to Twitch IRC!");
    Bot.db.defer.then(() => {
        if(!Bot.db.has(Bot.channelName)){
            let db = {
                isArvonta: false,
                arvontaLista: [],
                admins: botadmins
            };
            Bot.db.set(Bot.channelName,db);
        }
        CommandIndex.createCommands(Bot);
        console.log("Database has been loaded.")
    });
});

Bot.on("message", author => {
    let db = Bot.db.get(Bot.channelName);
    let command;
    let args;
    if(author.message.startsWith(prefix.toString())){
        args = author.message.slice(prefix.toString().length).split(" ");
        command = args.shift();
    } else {
        return;
    }
    let cmd = db.commands.find(c => c.getName() === command);
    if(cmd !== undefined){
        cmd.run(Bot,author,args);
    } else {
        Bot.say("Tälläistä komentoa ei ole :c");
    }
});

Bot.on("error", err => console.log(err));

//Created by: TenDRILLL 2019