const express=require('express');
const app=express();
const ajouterServiceRoute=express.Router();
let AjouterService=require('../model/ajouterService');
const mongoose = require('mongoose');
let Servive = require('../model/ajouterService');

//ajouter service dans la basede donne
ajouterServiceRoute.route('').post((req,res)=>{
    let service=new AjouterService(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    service.save().then(data=>{
     res.status(200).json({'ajouterService':data});
    })
    .catch(err=>{
        res.status(400).send('not save');
    });
});
ajouterServiceRoute.route('').get((req,res)=>{
    let shema = new  mongoose.Schema({
        ville:{
            type:String,
        },
        td:{
            type:String,
        },
        gr:{
            type:String,
        },
        fonction:{
           type:String ,
        },
        nd:{
            type:String,
        },
        natureTemps:{
            type:String
        }
     },
        {
            collection :'Service'
        } 
     );
    var UserShema = mongoose.model('UserShema',shema);
    UserShema.find({},(err, service)=>{
        res.send(service);  
});
});

module.exports=ajouterServiceRoute;