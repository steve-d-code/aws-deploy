const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send("UPDATE 070222 12:58: <a href='index.html'>index</a>");
});


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Stan the cat");
});