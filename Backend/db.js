const mongoose = require("mongoose");

const mongo = async () => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) throw new Error("🛑 MONGO_URL not found in environment variables");

    await mongoose.connect(uri);  // no options
    console.log("✅ database connected");
  } catch (error) {
    console.error("❌ DB connection failed:", error);
    process.exit(1);
  }
};

module.exports = mongo;
