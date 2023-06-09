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
CustomerRouter.get('/customer/:id', async (request, response) => {
    try {
        const cust = await Customer.findOne({ _id: request.params.id });
        console.log(cust);
        response.send(cust);
    } catch (err) {
        response.send({ message: 'failed to search the customer record' });
    }
})

CustomerRouter.delete('/customer/:id', async (request, response) => {
    try {
        const deletedCustomer = await Customer.findOneAndDelete({ _id: request.params.id });
        console.log("delete customer id", request.params.id);

        response.send({ message: ' Customer with id ' + request.params.id + 'deleted' });
    } catch (err) {
        response.send({ message: 'failed to delete the customer record', err });
    }
})

CustomerRouter.put('/customer/:id', async (request, response) => {
    //model.findOneAndUpdate(filter, update)
    console.log('modify customer');
    const cust = request.body;
    const filter = { _id: request.params.id }
    const update = {
        cName: cust.cName,
        email: cust.email,
        password: cust.password,
        cellNo: cust.cellNo,
        isActiveUser: cust.isActiveUser
    }
    try {
        const modCust = await Customer.findOneAndUpdate(filter, update);
        response.send(modCust);
    
    } catch (err) {
        response.send({ message: 'Failed to edit the customer' ,err});
    }
})

CustomerRouter.post('/customer/create', async (req, resp) => {
    console.log('req body:', req.body);
    const cust = req.body;
    try {
        const createdCustomer = await Customer.create({ cName: cust.cName, email: cust.email, cellNo: cust.cellNo });
        console.log('created customer:', createdCustomer);
        resp.send(createdCustomer);
    } catch (err) {
        console.log("error", err);
        resp.send({ message: 'Failed to create customer',err });

    }
})


export default CustomerRouter;