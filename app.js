const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

app.use(function (req, res) {
    res.send({ msg: "hello" });
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;

    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});

server.listen(3000 , function listening() {
    console.log('Listening on %d', server.address().port);
});