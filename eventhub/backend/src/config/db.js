//FILENAME : db.js

const mongoose = require("mongoose");

// Replace this with your MONGOURI.
const MONGODB_URL="mongodb+srv://admin:pNfReRxiAJhmDgye@cluster0.r6rtttx.mongodb.net/Projectspace?retryWrites=true&w=majority"
;


const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGODB_URL ,{
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;

