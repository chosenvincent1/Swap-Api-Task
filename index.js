const express = require('express');
const dotevn = require('dotenv').config();
const route = require('./route/swapiRoute');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 7000

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`)
});


app.use('/api', route)
