const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 3000});

/*广播*/
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            client.send(data);
        });
    });
});

/*单播*/
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });
    ws.send('something2');
});
