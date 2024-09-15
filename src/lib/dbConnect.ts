import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection:ConnectionObject = {};

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("allready connected to databse")
        return;
    }else{
        try {
            const db = await mongoose.connect(process.env.MONGODB_URI as string)
            connection.isConnected = db.connections[0].readyState
            console.log('db connected successfully')
        } catch (error) {
            console.log('database connection failed')
            process.exit()
        }
    }
}

export default dbConnect;