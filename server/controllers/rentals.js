
const Rental = require('../models/rental');

exports.getRental = (req,res)=>{
    Rental.find({}, (err,RentalData)=>{
        if(err){
           return res.mongoError(err);
        }
        return res.json(RentalData);
    })
    
}
exports.getRentalById =  (req, res) => {
    debugger
    const rental_id = req.params.rental_id;
    Rental.findById(rental_id,(err,doc)=>{
        if(err){
            return res.mongoError(err);
         }

         return res.json(doc);
    })
}

exports.createRental = (req,res)=>{
    const rentalData = req.body
    //console.log(rentalData);
    /*const addRental = new Rental(rentalData);
    addRental.save((err)=>{
        if(err){
            return res.status(422).send({errors:[{title:"Rental error",msg:"cannot add rental data"}]});
         }

         return res.json({msg:"Rental added succesfully!"});
    }); */
    Rental.create(rentalData,(err,addRental)=>{
        if(err){
            return res.mongoError(err);
        
         }

         return res.json({msg:"Rental added succesfully!"});
    })
}
/*
exports.deleteRental = (req,res)=>{
    const {rental_id} = req.params;

   const index = rentals.findIndex(r=>r._id === rental_id);
   rentals.splice(index,1);

   res.json({msg:`rental with id ${rental_id} was deleted`});
   }
exports.updateRental = (req,res)=>{
    const {rental_id} = req.params;
    const dataToUpdate = req.body;
    const index = rentals.findIndex(r=>r._id === rental_id);
    rentals[index].city = dataToUpdate.city;
    rentals[index].title = dataToUpdate.title;
    res.json({msg:`rental with id ${rental_id} updated`});
}*/