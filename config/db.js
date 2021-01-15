const mongoose = require("mongoose");
const config = require("config");
const dataBaseURI = config.get("mongoURI");

const connectDB = async () => {
  try {
    // Connect to Mongo with Mongoose
    mongoose
      .connect(dataBaseURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => console.log("Mongo connected"))
      .catch((err) => console.log(err));

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
