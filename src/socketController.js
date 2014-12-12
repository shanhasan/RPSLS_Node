var socket = function(io){

  io.on('connection', function(){

    console.log('Client connected!');

    socket.on('message', function(data){
      console.log(data);
    });

    socket.on('disconnect', function(){
      io.socket.emit('Client disconnected!');
    });
  }); 
};

module.exports = socket;
