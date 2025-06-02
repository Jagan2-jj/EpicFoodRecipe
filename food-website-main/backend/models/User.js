const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
       
    },
    password: {
      type: String,
       
    },
  },
  { timestamps: true }  
);

const User = mongoose.model("User", userSchema);

module.exports = User;
