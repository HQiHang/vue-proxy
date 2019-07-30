const express = require('express');
const app = express();

app.use('/user', (req, res) =>{
    res.send({
        name: 'hqh',
        age: 23,
        gender: 'male'
    })
});

app.listen(3000);
