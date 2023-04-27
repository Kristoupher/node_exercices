const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

io.on('connection', (socket) => {
    console.log('Client', socket.id, 'is connected via WebSockets')
})

app.listen(9000, () => {
    console.log('Le serveur est lancé sur le port 9000');
});
