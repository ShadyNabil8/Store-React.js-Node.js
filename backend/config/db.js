import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const db_uri = process.env.MONGO_URI;
export const connectDB = async () => {
    await mongoose.connect(db_uri)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err))
}