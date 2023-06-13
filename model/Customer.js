import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    cName: { type: String, required: true, unique: false },
   cellNo: { type: Number, required: true, unique: true },
   
    email:{ type: String, required: true, unique: true },
    /*address: {
        city: { type: String, required: true },
       state: { type: String, required: true },
        zip:{ type: String, required: true}, 
    },
   /* account:{
        type:{type:String, required: true},
        accountNo:{ type: Number, required: true},
        balance:{ type: Number,required: true}, 

    },*/
}, {
    timestamps: true
});

export const Customer = mongoose.model('Customer', customerSchema);