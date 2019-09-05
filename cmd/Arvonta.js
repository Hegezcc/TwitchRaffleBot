class Arvonta{
    constructor(){
        this.name = "arvonta";
        this.isAdminCmd = true;
    }

    getName(){return this.name;}

    run(Bot,author,args){
        let db = Bot.db.get(Bot.channelName);
        if(this.isAdminCmd){
            if(!db.admins.includes(author.username)){
                return Bot.say("Sinulla ei ole tarvittavia oikeuksia suorittaa tätä toimintoa :( Anna Tentti hoitaa :D");
            }
        }
        if(db.isArvonta){
            if(args.length > 0){
                if(args[0].toLowerCase() === "arvo"){
                    if(db.arvontaLista.length === 0){
                        return Bot.say("Kukaan ei osallistunut arvontaan, en voi arpoa voittajaa.");
                    }
                    console.log("Arvotaan seuraavista: " + db.arvontaLista);
                    let winner = db.arvontaLista[Math.floor(Math.random() * db.arvontaLista.length)];
                    console.log("Voittajaksi valittu: " + winner);
                    Bot.say("Onnittelut @" + winner + "! Olet voittanut arvonnan :)");
                    db.arvontaLista.map(username => {
                        db.arvontaLista.splice(db.arvontaLista.indexOf(username));
                    });
                    db.isArvonta = false;
                    Bot.db.set(Bot.channelName,db);
                } else if(args[0].toLowerCase() === "lopeta"){
                    db.arvontaLista.map(username => {
                        db.arvontaLista.splice(db.arvontaLista.indexOf(username));
                    });
                    db.isArvonta = false;
                    Bot.db.set(Bot.channelName,db);
                    Bot.say("Arvonta lopetettu, osallistuneiden pelaajien luettelo nollattu.");
                } else if(args[0].toLowerCase() === "debug"){
                    Bot.say("DEBUG: " + db.arvontaLista.join(", "));
                } else {
                    //INVALID COMMAND.
                }
            } else {
                Bot.say("Arvonta on jo käynnissä!");
            }
        } else if(args.length < 1){
            db.isArvonta = true;
            Bot.db.set(Bot.channelName,db);
            Bot.say("Arvonta on nyt käynnissä! Osallistu käyttämällä %o");
        } else {
            Bot.say("Arvonta ei ole vielä käynnissä.");
        }

    }
}
module.exports = new Arvonta();