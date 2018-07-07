import app from "./app"
import * as http from "http";
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('join-group', function (groupId) {
        socket.join(groupId);
        console.log("user join group" + groupId)

    });

    socket.on('msg', function (groupId,msg) {
        socket.broadcast.to(groupId).emit('msg',msg);
    });

    socket.on('leave-group', (groupId)=>{
        socket.leave(groupId);
        console.log("user left group" + groupId)
    });

    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
});

server.listen(4000, () => console.log('Example app listening on port 4000!'));