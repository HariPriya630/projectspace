const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  total:{
    type:String,
    required:true
},
description: {
  type: String,
  required: true
},
},

{ 
  collection: 'event' 
});

// export model user with UserSchema
module.exports = mongoose.model("event", UserSchema);