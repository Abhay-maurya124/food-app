const mongoose = require("mongoose");

const mongo = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/food-app")
     console.log("database connected");
  } catch (error) {
    console.log(error)
     process.exit(1);
  }
};

module.exports = mongo;
