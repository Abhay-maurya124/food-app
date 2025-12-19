const mongoose = require("mongoose");

const mongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    const db = conn.connection.db;
    console.log("database connected");
    const fetchdata = await mongoose.connection.db
      .collection("foodapp")
      .find({})
      .toArray();

    console.log(fetchdata);
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongo;
