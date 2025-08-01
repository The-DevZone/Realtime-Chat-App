import mongoose from "mongoose";

const connectDb = async () => {
    try {

      const instance =  await mongoose.connect(process.env.MONGODB_URI)
        console.log(`✅ Connected to MongoDB ${instance.connection.host}`);
    } catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1); // exit if connection fails
    }
}

export default connectDb;