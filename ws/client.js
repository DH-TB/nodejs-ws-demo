const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');

ws.on('open', function open() {
    ws.send('something1');
});

ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
});

ws.on('message', function incoming(data) {
    console.log(data);
});
