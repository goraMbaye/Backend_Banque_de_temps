const express = require('express');
const app = express();
const loginRoutes = express.Router();
let User = require('../model/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

//create connexion user 
loginRoutes.route('').post((req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
   let user = new User(req.body);
   let shema = new  mongoose.Schema({
    email: {
        type:String,required:true
    },
    passWord:{
        type:String,required:true
    }
},
{
    collection:'user'
}
);
   var UserShema = mongoose.model('UserShema',shema);
   UserShema.find().select({"email":user.email})
   .exec((err,resp)=>{
      let isUser=false;
      resp.forEach(data=>{
        if(data.email==user.email && data.passWord==user.passWord)
          isUser=true;
         });
         console.log("is user",isUser)
      if(isUser){
        console.log("user*****",resp);
        jwt.sign({user},'secretKey',(error,token)=>{
          res.json({
              token:token
          })
      });
      }
      else{
         res.json({
             err:"err coté serveur ce user n'existe pas"
        });
        
      }
        
        
   });
});

function createToken(user){
    jwt.sign({user},'secretKey',(err,token)=>{
        return token;
    });
}
module.exports = loginRoutes;