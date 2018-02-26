var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT|| 8000;

app.use(express.static(__dirname + '/dist'));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})
io.set('origins', 'https://anytimelibrary.herokuapp.com');
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
