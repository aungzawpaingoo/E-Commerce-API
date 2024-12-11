const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors'); 
const connectDatabase = require('./config/connectDatabase');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true, 
}));

app.use(express.json());

app.use('/api/v1/', products);
app.use('/api/v1/', orders);

app.listen(process.env.PORT, () => {
  console.log(`Backend Server is Running at ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
