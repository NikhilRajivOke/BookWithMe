const mongoose = require('mongoose');
const config = require('../config/dev');
const FakeDb = require('./fakedb');



mongoose.connect(config.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
},async ()=>{
    const fakedb = new FakeDb();
    console.log('starting populating DB');

    await fakedb.populate();

    await mongoose.connection.close();
    console.log("DB has been populated!!");
})