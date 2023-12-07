import mongoose from "mongoose";
const connectDB=async()=>{
    try {
        mongoose.set('strictQuery', false);
        const conn=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Veritabanı host:${conn.connection.host} bağlandı`);
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;