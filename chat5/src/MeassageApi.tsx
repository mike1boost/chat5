import {stateStoreService} from "./state/StateService";
import * as openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:4000');

function connectToChatRoom() {
    socket.on("updateClients", (groups:any,usersInGroup:any)=>{
        console.log(groups)
        stateStoreService.updateGroupList(groups,usersInGroup)
    })
}

function sendMessage(groupID:any, msg:any){
    socket.emit('sendMessage', groupID,msg)
}

export { connectToChatRoom,sendMessage };
