var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.send("Hello World")
});

server.listen(3000, function(){
  console.log("server listening on port 3000");
});

app.get('/greetings', function(request, response){
  response.render('index');
});

module.exports = server;