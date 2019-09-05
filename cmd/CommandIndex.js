module.exports.createCommands = function createCommands(Bot){
    let dd = Bot.db.get(Bot.channelName);

    let moi = require("./Moi.js");
    let osallistu = require("./Osallistu.js");
    let arvonta = require("./Arvonta.js");

    dd.commands = [moi,osallistu,arvonta];
    Bot.db.set(Bot.channelName,dd);
    console.log("Commands have been created.");
};