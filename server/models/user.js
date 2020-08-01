const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String,required:true,minlength:[4,'min length is 4 characters'],maxlength:[32,'max length is 32 characters']},
    email:{type:String,minlength:[4,'min length is 4 characters'],maxlength:[32,'max length is 32 characters'],required:true,lowercase:true,unique:true,match:/^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/},
    password:{type:String,minlength:[4,'min length is 4 characters'],maxlength:[32,'max length is 32 characters'],required:true}

});
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(user.password,salt,(err,hash)=>{
            user.password=hash;
            next();
        })
    })
});

UserSchema.methods.hasSamePassword = function(providedPassword){
    return bcrypt.compareSync(providedPassword,this.password)
}
UserSchema.statics.sendError = function(req,res){
    const {status,detail} = config;
    return res.status(status).send({errors:[{title:"User Error",detail}]});
}
module.exports=mongoose.model('User',UserSchema);