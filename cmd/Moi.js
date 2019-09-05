class Moi{
    constructor(){
        this.name = "moi"; //komennon nimi, jolla sitä käytetään (%moi)
        this.isAdminCmd = false; //vaatiiko komento Admin oikeudet
    }

    getName(){return this.name;}

    run(Bot,author){ //itse komennon suorittaminen
        let db = Bot.db.get(Bot.channelName);
        if(this.isAdminCmd){
            if(!db.admins.includes(author.username)){
                return Bot.say("Sinulla ei ole tarvittavia oikeuksia suorittaa tätä toimintoa :(");
            }
        }
        Bot.say("No mutta hei " + author.display_name + " :)");
    }
}
module.exports = new Moi();