import mongoose,{ Schema } from "mongoose";
import { type } from "node:os";

const userSchema=new Schema({
  name:{type:String,required:true},
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  email:{type:String,required:true},
  token:{type:String}
})

const User=mongoose.model("User",userSchema);

export{User};