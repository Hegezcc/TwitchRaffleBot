class Osallistu{
    constructor(){
        this.name = "o";
        this.isAdminCmd = false;
    }

    getName(){return this.name;}

    run(Bot,author,args){
        let db = Bot.db.get(Bot.channelName);
        if(this.isAdminCmd){
            if(!db.admins.includes(author.username)){
                return Bot.say("Sinulla ei ole tarvittavia oikeuksia suorittaa tätä toimintoa :(");
            }
        }
        if(db.isArvonta){
            if(db.arvontaLista.includes(author.username)){
                Bot.say("Olet jo arvonnassa :D");
            } else {
                db.arvontaLista.push(author.username); //Tallennamme käyttäjänimen näkyvän-nimen sijaan, sillä käyttäjänimi ei muutu yhtä usein kuin näkyvä-nimi.
                Bot.say("Olet nyt osallistunut arvontaan " + author.display_name + "! Onnea matkaan :)");
                Bot.db.set(Bot.channelName,db);
            }
        } else {
            Bot.say("Tällä hetkellä ei ole arvontaa :(");
        }
    }
}
module.exports = new Osallistu();
