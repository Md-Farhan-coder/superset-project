import mongoose from "mongoose";
export const connectDB = async () => {
    try{
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`).then(() => {
          console.log('MONGODB connected successfully');
        }
        )
    }
    catch(err){
         console.log('MongoDB connection failed',err);
    }
}

