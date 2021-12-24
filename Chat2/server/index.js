const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const router = require ("./router");
const { addUser, getUser } = require("../user");

const app = express();
const server = http.createServer(app);
//const io = socketio(server);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


io.on('connection',(socket)=>{
    socket.on('join',({name,room},callback)=>{
      const {error,user} = addUser({id:socket.id,name,room});
      if(error) return callback(error);

       socket.join(user.room);

      socket.emit('message',{user:'admin',text:`${user.name},welcome to the room ${user.room}.`});
      socket.broadcast.to(user.romm).emit('message',{user:'admin',text:`${user.name} has joined!`});

     
      callback();
    });

    socket.on('sendMessage',(message,callback)=>{
      const user = getUser(socket.id);
      io.to(user.room).emit('message',{user:user.name,text: message});
      callback();
    }) 

    socket.on('disconnect',()=>{
        console.log('User has left !!!')
    });

});

app.use(router); // middlewire for routing
app.use(cors());

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
