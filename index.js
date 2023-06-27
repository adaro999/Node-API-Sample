const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');
const errorMiddleware= require('./middleware/errorMiddleWare');
var cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const app = express();

//middleware
app.use(cors())
app.use(express.json())

//routes 
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
  //throw new Error('fake error');
  res.send("Hello world!"); 
})

app.get('/food', (req, res) => {
  res.send("Hello Players !");
})

app.use(errorMiddleware);

mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
  app.listen(PORT, () => {
    console.log("App is running on port 3000");
  });
  console.log('Connected to MongoDB') 
}).catch((error) => {
  console.log('Error!') 
})