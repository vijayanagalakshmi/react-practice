import express from 'express';
import customers from "./data.js";
import accounts from "./data1.js";
import feedback from './data2.js';
import loans from './data3.js';

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
    
    return response.send(customer);
})
server.get('/accounts',(request, response) => {
    return response.send(accounts);
})
server.get('/loans' , (request, response) => {
    return response.send(loans);
})
server.get('/Feedback' ,(request, response) => {
     return response.send(feedback);
});

