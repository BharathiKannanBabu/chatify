import mongoose from "mongoose";

export const connectDB = async () => {
  try {
<<<<<<< HEAD
    const { MONGODB_URI } = process.env;
    if (!MONGODB_URI) throw new Error("MONGODB_URI is not set");

    const conn = await mongoose.connect(MONGODB_URI);
=======
    const conn = await mongoose.connect(process.env.MONGODB_URI);
>>>>>>> 1e60e47e1357652a56131ee0dee91460993c9b9f
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // 1 status code indicates failure, 0 indicates success
  }
};
