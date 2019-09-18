const mongoose = require('mongoose');
const shema = mongoose.Schema;

let user = new shema({
    email: {
        type:String,required:true,unique:true
    },
    nom:{
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
module.exports= mongoose.model('user',user);