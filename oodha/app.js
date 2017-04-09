var express     = require('express');
var app         = express();
var http        = require('http').Server(app);
var io          = require('socket.io')(http);
var oodha       = require("./oodha");

app.use(express.static('public'));

app.use(function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(socket){
  console.log('New connection received. Connection ID : ',socket.id);
  io.emit('MSG', "Welcome.. Now you are connected to " + oodha.config.app);
  io.emit("SECRET",oodha.secret.get_secret());
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

oodha.secret.events.addListener("update_secret",function(new_secret){
    io.emit("SECRET",new_secret);
})

http.listen(oodha.config.port, function(){
  console.log('oodha.com started listening on *:'+ oodha.config.port);
});