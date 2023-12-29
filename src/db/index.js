import mongoose, { mongo } from "mongoose";
import { DB_NAME } from "../constants.js";

export const connnectDB = async ()=>{
    try{
      const connectionInstance = await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`);

      console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance}`);

    }catch(error){
      console.log("MONGODB couldn't connect!!");
     process.exit(1);
    }
}