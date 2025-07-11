const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// console.log("mmmmmm : ",process.env.VITE_MONGODB_URI)
const connectDB = async () => {
  await mongoose.connect(
    process.env.VITE_MONGODB_URI
    
  );
};

module.exports = connectDB;
