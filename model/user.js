const mongoose = require('mongoose');
const shema = mongoose.Schema;

let user = new shema({
    email: {
        type:String,required:true
    },
    nom:{
        type:String,required:true
    },
    passWord:{
        type:Number,required:true
    }
},
{
    collection:'user'
}
);
module.exports= mongoose.model('user',user);