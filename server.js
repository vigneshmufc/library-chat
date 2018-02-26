var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT|| 8000;

app.use(express.static(__dirname + '/dist'));


io.on('connection', (socket) => {
console.log('new connection made');

socket.on('event1', (data) => {
  console.log(data.msg);
  socket.broadcast.emit('event1',data);
});
});

server.listen(port, () => {
  console.log("Listening on port " + port);
});
