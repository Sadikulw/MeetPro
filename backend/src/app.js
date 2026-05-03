import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import  dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js"
dotenv.config()

const app = express();
const server = createServer(app);
const io =connectToSocket(server);

app.use(cors())
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb",extended:true}))

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      message: "Invalid JSON body",
    });
  }

  next(error);
});

app.use("/api/v1/users",userRoutes)


const PORT=process.env.PORT ||8000

app.get("/home",(req,res)=>{
  res.json({message:"Home"})
})

const start = async () => {
  await connectDB()
  server.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
  });
};

start();
