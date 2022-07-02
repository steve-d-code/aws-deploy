const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("UPDATE 710: Welcome to the home page.");
    res.send("<a href='index.html'>index</a>");
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Stan the cat");
});