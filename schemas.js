const mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)

 //CREATTING A TEMPLATE OR BLUEPRINT OF HOW DATABASE(CHATS) SHOULD LOOK LIKE
 
let textSchema = new mongoose.Schema({
    name : String,
    num : Number,
    password : String,
    image : String
 
    });
    
    //CREATING A MODEL THAT IS SENDING DATA TO DB (CHATS DATABASE) 
    

    module.exports ={
        c : textSchema
    }