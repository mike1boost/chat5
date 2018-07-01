import app from "./app"
import * as http from "http";
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('sendMessage', function (groupId,msg) {
        //io2.sockets.emit('updateClients',msg)
        //update db
        console.log(msg);
        // const {groups,usersInGroups} = messageSent(groupId,msg)
        // io.sockets.emit('updateClients',groups,usersInGroups)
    });

    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
})

server.listen(4000, () => console.log('Example app listening on port 4000!'));