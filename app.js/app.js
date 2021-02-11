const express = require('express');
const app = express();
app.listen(3000);
app.get('hello/', (req, res) => {
    response.send('Express basics!');
});


app.get('/', (req, res) => {
    res.send('Hello world!')
});