const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3001

const uri = process.env.MONGODB_URI || "mongodb://localhost/portfolio"

mongoose.connect(uri, {useNewUrlParser: true});

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.listen(PORT, () => {
    console.log("Listening!")
})