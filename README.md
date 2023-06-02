// ######## Install DB ##########################
// (1). download & install 'mongodb compass' 
// (2). Create a database.
// (3). configure mongodb://localhost 
//      (DB-URI: //uri: mongodb://host:port/database)

// ######## .ENV ##########################
// (1). create .env file in root and add DB-Connection(DB-URI) String

// ######## connect to database ##########################
// install dotenv mongoose
// (1). import dotenv and invoke dotenv.config()
// (2). import mongoose and invoke mongoose.connect(DB-URI) to connect-to-db;

// ######## define model ##########################
// (1). Create a model by defining with mongoose.Schema object with properties 

// ######## define router ##########################
// (1). import express to define router using express.Router()
// (2). call router.get('/', async (req, res) -> await-function) to seed the data from data.js
//  (a). insert all records using model.insrtMany(customers);
//  (b). send the created records using response object.
// (3). export this Router to import from the server

// (1). ######## Use express-router with express-server ##########################
// (Ex).    server.use('/users', userRouter);
