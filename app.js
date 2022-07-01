const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("Welcome to the home page Cat");
});


app.listen(3000, () => {
    console.log("Stan the cat");
});