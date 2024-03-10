const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    console.log('route users ', req.url);
    res.send('<h1>Users</h1>');
    // next();
});

app.use('/', (req, res, next) => {
    console.log('route main ', req.url);
    res.send('<h1>Hello world!</h1>');
    // next();
});

app.listen(3000);