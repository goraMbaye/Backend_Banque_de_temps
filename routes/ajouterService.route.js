const express=require('express');
const app=express();
const ajouterServiceRoute=express.Router();
let AjouterService=require('../model/ajouterService');
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
ajouterServiceRoute.route('/serviceId').get((req,resp)=>{
   const id=req.params.serviceId;
   service.findById(id)
   .exec()
   .then(doc=>{
       console.log(doc);
       resp.status(200).json(doc);
   })
   .catch(err=>{
       console.log(err);
       resp.status(500).json({error:err});
   });
});
module.exports=ajouterServiceRoute;