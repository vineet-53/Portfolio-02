const mongoose = require('mongoose')
require('dotenv').config()
const db = { 
    connect() { 
        try { 
            mongoose.connect(process.env.DB_URL).then(res=> console.log("connected to database")); 
        }catch(err) { 
            console.error(err.message);
        }
    }
}
module.exports = db