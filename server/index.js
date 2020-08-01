const express = require('express');
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/Rentals');
const users = require('./routes/Users');
const { onlyAuthUser } =  require('./controllers/users');
const mongoose = require('mongoose');
const config = require('./config/dev');
const {handleMongoError} =  require('./middlewares');
require('./models/rental');
require('./models/user');
const app = express();

const PORT = process.env.PORT || 3001;


mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},(err)=>{
    err?console.log(err):console.log("connected to mongo atlas");
})
//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(handleMongoError);


app.get('/api/v1/secret',onlyAuthUser,(req,res)=>{
    const user = res.locals.user
    return res.json({msg:`Super secret message to : ${user.username}`});
})


//API routes

app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1',users);


app.listen(PORT, () => { console.log(`server is listening now on ${PORT}!!`) });