"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const http = require("http");
const socketIO = require('socket.io');
const server = http.createServer(app_1.default);
const io = socketIO(server);
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('sendMessage', function (groupId, msg) {
        //io2.sockets.emit('updateClients',msg)
        //update db
        console.log(msg);
        // const {groups,usersInGroups} = messageSent(groupId,msg)
        // io.sockets.emit('updateClients',groups,usersInGroups)
    });
    socket.on('disconnect', function () {
        console.log('a user is disconnected');
    });
});
server.listen(4000, () => console.log('Example app listening on port 4000!'));
//# sourceMappingURL=index.js.map