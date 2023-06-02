import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import customers from './data.js';
import accounts from './data1.js';
import feedback from './data2.js';
import loans from './data3.js';

dotenv.config();
 mongoose.connect('mongodb+srv://vijayanagalakshmi14:Myowndatabase@mybank.efhaxf9.mongodb.net/my-newbank')
 .then(() => {
    console.log('connected to DB');

 }).catch(error =>{
    console.log('failed to connected');
    handleError(error);
 });

 //---------

const server = express();


server.listen(5500, () => {
    console.log('Server started: localhost:5500');
})

server.get('/', (request, response) => {
    return response.send('Welcome to the node-server..!!..');
})
server.get('/customers', (request, response) => {
    return response.send(customers);

})
server.get('/customer/id/:custId' , (request , response) => {
    console.log ('id', request. params);
    const customer = customers.find(cust => cust.id == request.params.custId);
    if(customer) {
        console.log('sending customer details',customer);
        return response.send(customer);
    } else
    return response.status(404).send({message:'customer not found'});
})

server.get('/accounts',(request, response) => {
    return response.send(accounts);
})

server.get('/account/id/:accId', (request , response)=>{
    console.log('account id:',request.params);
    const account = accounts.find(acc => acc.id == request.params.accId);
    if(account){
        console.log("sending account details",account);
        return response.send(account);
    } else{
        return response.status(404).send({message: 'account not found'});
    }
})

server.get('/loans' , (request, response) => {
    return response.send(loans);
})
server.get('/Feedback' ,(request, response) => {
     return response.send(feedback);
});

