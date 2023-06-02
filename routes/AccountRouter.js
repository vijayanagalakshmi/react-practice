import express from 'express'
import { Account } from '../model/Account.js';
import accounts from '../data1.js';

const AccountRouter = express.Router();
AccountRouter.get('/info', async (request, response) => {
    console.log('Info api called.');
    response.send({ info: "Hello" })
})
AccountRouter.get('/accountSeed', async (request, response) => {
   
    try {
         await Account.insertMany(accounts);
         response.send("Records inserted successfully.");
     } catch (err) {
        response.send("Failed to insert records.");
     }
 })
 AccountRouter.get('/accounts', async (request, response) => {
    const allAccounts = await Account.find();
    response.send(allAccounts);
})

export default AccountRouter;
