import mongoose from 'mongoose'

export const connectToBD = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDb connected: ${connect.connection.host}`)
    } catch (error) {
        console.log("MongoDb connection error:", error);
    }
}