import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connected to Mongo db");
  } catch (error) {
    console.log(error, "Error connection to MongoDB");
  }
};

export default connectToMongoDB;
