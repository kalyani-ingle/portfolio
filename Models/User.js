const mongoose = require("mongoose");

//inquiry schema
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Name is required']
  },
  email: {
    type: String,
    required: [true,'Email is required']
  },
  message: {
    type: String,
    required: [true,'Message is required']
  },
  timestamp: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("users", usersSchema);
