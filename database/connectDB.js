import mongoose from "mongoose";
const connectDB = async () => {
    const connect = await mongoose.connect("mongodb://localhost:27017/mongodb_crud");
    if (connect) {
        console.log("DB Connected");
    } else {
        console.log("DB Connection Failed ...");
    }
}

export default connectDB;