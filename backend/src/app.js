import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import  dotenv from 'dotenv'
import { connectDB } from "./config/db.js";

dotenv.config()

const app = express();
const server = createServer(app);
const io =connectToSocket(server);

app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))

const PORT=process.env.PORT ||8000

app.get("/home",(req,res)=>{
  res.json({message:"Home"})
})

const start = async () => {
  await connectDB()
  server.listen(8000, () => {
    console.log("LISTENING ON PORT 8000");
  });
};

start();
