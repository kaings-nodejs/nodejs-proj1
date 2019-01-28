const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('inside middleware 1..... ');
    next();
});

app.use((req, res, next) => {
    console.log('inside middleware 2..... ');
    res.send('<h5>Hello from ExpressJS</h5>');
});

const server = http.createServer(app);

server.listen(3000);

