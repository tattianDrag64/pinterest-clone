import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String, 
        required:true,
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true,
    }, 
    password: {
        type: String, 
        pequired: true,
    }, 
    followers:[{
        type: mongoose.Schema.Types.DbjectId,
        ref: "User",
    }], 
    [{
        type: mongoose.Schema.Types.DbjectId,
        ref: "User", 
        }]

})