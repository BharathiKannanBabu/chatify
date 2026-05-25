import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGODB_URI } = process.env;
    if (!MONGODB_URI) throw new Error("MONGODB_URI is not set");

    const conn = await mongoose.connect(MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // 1 status code indicates failure, 0 indicates success
  }
};
