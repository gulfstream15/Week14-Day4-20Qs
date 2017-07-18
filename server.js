var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.use(express.static('client/build'));

//sets up channel. On connection, do the callback method
io.on("connection", function(socket){

    socket.on("question", (message) => {
      io.sockets.emit("question", message);
    })

    socket.on("answer", (message) => {
      io.sockets.emit("answer", message);
    })
})

var server = http.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;

console.log('Example app listening at http://%s:%s', host, port);
});
