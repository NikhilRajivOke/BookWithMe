const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: {type:String,maxlength:[128,'Invalid length of characters'],required:true},
    city: {type:String,required:true,lowercase:true},
    category: {type:String,required:true,lowercase:true},
    image: {type:String,required:true},
    numOfRooms: Number,
    shared: Boolean,
    description:{type:String,required:true},
    dailyPrice: Number,
    createdAt:{type:Date,default:Date.now}
})
rentalSchema.statics.sendError = function(res,config){
    const {status,detail} = config;
    return res.status(status).send({errors:[{title:'Rental Error',detail}]});
}

module.exports = mongoose.model('Rental',rentalSchema);