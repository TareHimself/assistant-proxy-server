const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const process = require('process')

app.get('/', (req, res) => {
	res.send({ "data": "yo" })
});

io.on('connection', (socket) => {
	console.log('a user connected');
});

server.listen(process.argv.includes('debug') ? 3000 : 80, () => {
	console.log('listening on *:3000');
});