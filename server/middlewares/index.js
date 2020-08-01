exports.handleMongoError = (req,res,next) =>{
    res.sendApiError = config=>{
        const {status = 422 ,title,detail} = config;
        return res.status(status).send({errors:[{title,detail}]});
    }

    res.mongoError = dbError =>{
        const normalizedArray = [];
        const errorField = 'errors'

        if(dbError && dbError.hasOwnProperty(errorField) && dbError.name === 'ValidationError'){
            const errors = dbError[errorField];

            for(let property in errors){
                normalizedArray.push({title:property,detail:errors[property].message});
            }
        }
        else{
            normalizedArray.push({title:"DB Error" , detail:"Ooops something went wrong !"});
        }

       return res.status(422).send({errors:normalizedArray})
    }
    next();
}

