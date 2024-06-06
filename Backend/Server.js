import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import auth from './Routes/auth.js'
import user from './Routes/user.js'
dotenv.config()
 const app=express();
 app.use(cors())
 app.use(express.json())
 app.use(auth)
 app.use(user)
 const PORT=process.env.PORT || 8080
 mongoose.connect(process.env.MONGO_URL)
 .then(() => {
   app.listen(PORT, () => {
       console.log(`Running on PORT ${PORT}`);
   });
})
.catch(error => console.error(`Error connecting to MongoDB: ${error}`));