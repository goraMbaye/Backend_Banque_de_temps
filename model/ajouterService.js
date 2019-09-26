const mongoose=require('mongoose');
const schema =mongoose.Schema;
let ajouterService=new schema({
   ville:{
       type:String ,require:true,
   },
   td:{
       type:String,require:true
   },
   gr:{
       type:String,require:true
   },
   fonction:{
      type:String ,require:true
   },
   nd:{
       type:String, require:true
   },
   natureTemps:{
       type:String,require:true
   }
},
   {
       collection :'Service'
   } 
);
module.exports=mongoose.model('ajouterService',ajouterService);