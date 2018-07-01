import {StateStore} from "./StateStore"
import Iuser from "../models/Iuser";
import serverApi from '../server-api';
import * as messageApi from "../MeassageApi";


class StateStoreService{
    listeners: Function[] = [];

    public get() {
        return StateStore.getInstance();
    }

    public updateGroupList(groupId:any ,msg:any){

    }

    public async initData(){
        const users = await serverApi.getUsers();
        StateStore.getInstance().users = users;
        return users;
    }

    public async getItemss() {
        const items = await serverApi.getItems();
        StateStore.getInstance().items = items;
        return items;
    }

    public  getItems() {
        return StateStore.getInstance().items;
    }

    public getUsers() {
        return StateStore.getInstance().users;
    }

    public async updateUsers(user: Iuser) {
        StateStore.getInstance().users =
            await serverApi.updateUser(user);
    }

    public async deleteUser(id: any) {
        StateStore.getInstance().users =
            await serverApi.deleteUser(id);
    }



    public getPanel(){
        return StateStore.getInstance().getPanel();
    }

    public setPanel(showLogin:boolean){
        return StateStore.getInstance().setPanel(showLogin);
    }

    public getUserNameLogin(){
        return StateStore.getInstance().getUserNameLogin()
    }

    public setUserNameLogin(userName:any){
        StateStore.getInstance().setUserNameLogin(userName);
    }

    public getSelectedToChat(){
        StateStore.getInstance().getSelectedToChat();
    }

    public setSelectedToChat(item:any){
        StateStore.getInstance().setSelectedToChat(item);
        this.onStoreChanged();
    }

    public getMsg() {
        return StateStore.getInstance().getMassage();
    }

    public setMsg(val: any) {
        const groupId = StateStore.getInstance().setMassage(val);
        messageApi.sendMessage(groupId, val);
        this.onStoreChanged();
    }

    public subscribe(listener: any){
        this.listeners.push(listener);
    }

    private onStoreChanged(){
        for(const listener of this.listeners){
            listener();
        }
    }
}

export const stateStoreService = new StateStoreService();