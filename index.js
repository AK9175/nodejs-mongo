const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI
const db1 = require('./config/keys').mongoURI1
const schemachat = require('./schemas').c
const hashing = require('password-hash')
const cloudinary = require('cloudinary')
const formidable = require('formidable')
const jwt = require('jsonwebtoken')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

cloudinary.config({
    cloud_name : 'dpwspeuft',
    api_key : '653775661217294',
    api_secret : 'HIXWv-ESOifGXQHgx6skUvmLdv0'
})

app.get("/" , (req , res) => {
    res.render('index')
})
    app.post("/" , (req , res) => {
    mongoose.connect(db , (err)=>{
    if(err){
        console.log("Sorry" , err)
    }
    else{
        console.log("Lmao")
        var form = new formidable.IncomingForm();
        console.log("Lmao2")
        form.parse(req , (err , fields , files)=>{
            res.send({files , fields})
           cloudinary.uploader.upload(files.img.path , (result)=>{
                console.log(result)
                console.log("Connected");
        console.log(req.body);
        var chats = mongoose.model("chats" , schemachat , fields.mongo+"db");
        chats.create({
            name : fields.User ,
            num : fields.num,
            password : hashing.generate(fields.pass),
            image : result.secure_url
            
        })
     console.log("Thanks for registration")
            })
            
        })
    }
    })
   })

app.get('/views/find' , (req , res) => {
    res.render('find')
}
)

app.post('/views/find' , (req , res)=>{
    mongoose.connect(db , (err)=>{
        if(err){
            console.log("Sorry" , err)
        }
        else{
            console.log("Connected");
             var form1 = new formidable.IncomingForm();
        console.log("Lmao2")
        form1.parse(req , (err , fields , files)=>{
           let random = mongoose.model("chats" , schemachat , fields.find+"db");
            random.find( (err , dbase)=>{
                if(err){
                    console.log("Sorry finding data")
                }
                else{
                    res.render('about',{dbase : dbase})
                }
            })})
    }
    }
)    })

app.listen(process.env.PORT || 8080)
console.log('8080 is the magic port');
/*mongoose.connect(db , (err)=>{
    if(err){
        console.log("Sorry" , err)
    }
    else{
        console.log("Connected");
       let random = mongoose.model("chats" , schemachat , "Atharvadb");
        random.find( (err , dbase)=>{
            if(err){
                console.log("Sorry finding data")
            }
            else{
                res.render('about',{dbase : dbase})
            }
        })
}
})
}*/