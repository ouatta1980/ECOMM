import app from "./app.js";
import dotenv from'dotenv';
import dbConnection from "./mongoDB/db.js";
dotenv.config();
const port = process.env.port;

//Server run check
app.listen(port, ()=>{
    console.log(`server is running on port {port}`)
    dbConnection();
})