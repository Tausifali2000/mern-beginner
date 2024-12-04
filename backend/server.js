import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get('/products', (req, res)=> {})



app.listen(5000, () => {
 
  console.log("Server started at local host 5000")
})

