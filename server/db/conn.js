//const mongoose = require("mongoose");
//const mongoose = require("mongoose");
//require('dotenv').config();

//const DB = process.env.DATABASE 

//mongoose.connect(DB, {
//    useUnifiedTopology: true,
//    useNewUrlParser: true
//}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
//    console.log(errr);
//})
// /server/db/conn.js
const mongoose = require('mongoose'); // Ensure this is declared only once
require('dotenv').config();

mongoose.set('strictQuery', false); // Suppress the strictQuery warning

// Database connection
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('Database connection error:', err));

module.exports = mongoose; // Export mongoose if needed elsewhere