import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true}
    


})
export default mongoose.model.CRUD||mongoose.model("CURD",userSchema)