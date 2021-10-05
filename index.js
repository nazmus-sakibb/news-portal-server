const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongodb = require('mongodb');
const { MongoClient } = require('mongodb');

dotenv.config();


const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});



app.listen(5000, ()=> {
    console.log('backend is running');
})