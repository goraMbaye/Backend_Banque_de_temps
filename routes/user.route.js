const express = require('express');
const app = express();
const userRoutes = express.Router();
let User = require('../model/user');

//add user in database
userRoutes.route('/add').post((req,res)=>{
  let user = new User(req.body);  
  user.save().then(user=>{
      res.status(200).json({'user':'user is created'});
  })
  .catch(err=>{
      res.status(400).send("error insert in database");
  });
});

userRoutes.route('/test').get((req,resp)=>{
        resp.json({
            message:'welcome to the api'
        });
    });
    userRoutes.route('/post').post((req,resp)=>{
         resp.json({
             message: 'post created-----------'
         });
     });
     user={
         email:'ngouda1103@gmail.com',
         passWord:'1234'
     };
     userRoutes.route('/login').post((req,resp)=>{
         
         jwt.sign({user},'secretKey',(err,token)=>{
             resp.json({
                 token:token
             })
         });
     });
module.exports=userRoutes;