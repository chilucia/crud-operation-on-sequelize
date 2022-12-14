import ('./config/dbConfig.js');
import express from 'express';
import saleRouter from './routes/saleRoute.js';

// import db from './config/dbconfig.js';
// try{
//     db.authentication();
//     console.log("connection successfully")
// }catch(error){
//     console.log("There was no error while trying to connect to the database.")

// }


const app = express();

app.use(express.json())
app.use('/api/v1', saleRouter)


const PORT = 1010;
app.listen (PORT, () => {
    console.log("Listening to port: " + PORT);
});