const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect =()=>{
    mongoose.connect(process.env.DB_URL)
.then(()=>console.log("db connection is successful"))
.catch((error)=>{
    console.log("db connection not successful");
    console.error(error.message);
    process.exit(1);
});

}


module.exports = dbConnect;