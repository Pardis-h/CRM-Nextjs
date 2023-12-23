import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
    name:{
        type:String,
        minLength : 3,
        required:true
    },
    lastName:{
        type:String,
        required : true,
        minLength: 3
    },
    email:{
        type:String,
        required:true,
        minLength:3
    },
    phone:String,
    address:String,
    postalCode:Number,
    birthday : Date,
    products:{
        type:Array,
        default:[]
    },
    createdAt:{
        type: Date,
        default:Date.now,
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    avatar: {
        type:Number
    }
});

const Customer = models.Customer || model("Customer",customerSchema)

export default Customer