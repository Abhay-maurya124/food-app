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


    // const fetchcat = await mongoose.connection.db
    //   .collection("foodcategory")
    //   .find({})
    //   .toArray();
    const data = fetchdata;
    // const catdata = fetchcat;

    global.foodapp = data;
    // global.foodapp = catdata;
  } catch (err) {
    console.log(err);
  }
};
module.exports = mongo;
