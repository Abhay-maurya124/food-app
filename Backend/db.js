const mongoose = require("mongoose");

const mongo = async () => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) throw new Error("🚫 MONGO_URL not set");

    const conn = await mongoose.connect(uri);
    console.log("✅ Database connected to:", conn.connection.name);

    const db = conn.connection.db;
    if (!db) throw new Error("❌ Native DB handle not found");

    // LIST collections
    const collections = await db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));

    // Try pulling docs from each
    // for (const { name } of collections) {
    //   const docs = await db.collection(name).find({}).toArray();
    //   console.log(`Docs in collection:`, docs);
    // }

  } catch (error) {
    console.error("❌ DB error:", error);
  }
};

module.exports = mongo;

// const mongoose = require("mongoose");

// const mongo = async () => {
//   try {
//     const conn = mongoose.connect(process.env.MONGO_URL);
//     const db = conn.connection.db;
//     console.log('database connected',)
//     const fetchdata = await mongoose.connection.db.listCollections("foodapp").toArray()
//     console.log(fetchdata)
//   } catch (err) {
//     console.log(err);
//   }
// };
// module.exports = mongo;
