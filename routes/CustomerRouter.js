import express, { response } from 'express'
import { Customer } from '../model/customer.js';
import customers from '../data.js';

const CustomerRouter = express.Router();

CustomerRouter.get('/info', async (request, response) => {
    console.log('Info api called.');
    response.send({ info: "Hi There" })
})
CustomerRouter.get('/customerSeed', async (request, response) => {
   
   try {
        await Customer.insertMany(customers);
        response.send("Records inserted successfully.");
    } catch (err) {
        response.send("Failed to insert records.");
    }
})

CustomerRouter.get('/customers', async (request, response) => {
    const allCustomers = await Customer.find();
    response.send(allCustomers);
})
CustomerRouter.get('/customer/:id', async(request,response) =>{
    try{
        const cust = await Customer.findOne({_id:request.params.id});
        response.send(cust);
    }catch(err){
        response.send({message:'failed to search the customer record'});
    }
})

export default CustomerRouter;