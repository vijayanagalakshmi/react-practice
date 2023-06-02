import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name :{ type:String, require: true, unique: false },
    accType :{ type:String, require: true, unique: false },
    cardNo :{ type:Number, require: true, unique: true },
    balance :{ type:String, require: true, unique: true },
},{
    timestamps: true
});

export const Account = mongoose.model('Account' , accountSchema);