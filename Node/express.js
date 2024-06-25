const http =  require('http');
const express =  require('express');

const app =  express();

app.get('/', (req, res) => {
    return res.send("Hello I am Homepage")
});

app.get('/about', (req, res) => {
    return res.send("Hello I am About Here")
});

const myServer = http.createServer(app);

myServer.listen(8000, ()=> console.log("Server started"));