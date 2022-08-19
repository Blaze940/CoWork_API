"use strict";
//RENDRE PARAM CONDITIONNELLEMENT OPTIONNEL//
/*var userschema = mongoose.Schema({
    org: String,
    username: String,
    fullname: String,
    password: {
        type: String,
        required: function(){
            return this.email? true : false
        }
    },
    email: String
});*/
//BelongsTo dans HoraryPrice a modifier par CARD_ID
//Horary price Routes à MODIFIER CAR MANQUE MIDDLEWARE
//Erreur Postman sur requete : Retirer ?retryWrites=true&w=majority dans MONGO_URL et remplacer par nom de la base qu'on veut creer."test" ici par exemple
//UserMiddleware a rectifier
