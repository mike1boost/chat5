import {StateStore} from "./StateStore"
import Iuser from "../models/Iuser";
import serverApi from '../server-api';

class StateStoreService{
    listeners: Function[] = [];

    public get() {
        return StateStore.getInstance();
    }

    public async initData(){
        const users = await serverApi.getUsers();
        StateStore.getInstance().users = users;
        return users;
    }

    public async getItems() {
        const items = await serverApi.getItems();
        StateStore.getInstance().items = items;
        return items;
    }

    public async getGroups(){
        const groups = await serverApi.getGroups();
        StateStore.getInstance().groups = groups;
        return groups;
    }

    public  getStoreItems() {
        return StateStore.getInstance().items;
    }

    public getUsers() {
        return StateStore.getInstance().users;
    }

    public async updateUsers(user: Iuser) {
        StateStore.getInstance().users =
            await serverApi.updateUser(user);
    }

    public async addUserToGroup(groupId: string, userId: string) {
        return await serverApi.addUserToGroup(groupId, userId);
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
        return StateStore.getInstance().getSelectedToChat();
    }

    public setSelectedToChat(item:any){
        StateStore.getInstance().setSelectedToChat(item);
        this.onStoreChanged();
    }

    public getMsg() {
        return StateStore.getInstance().getMassage();
    }

    public async setMsg(msg: any, id: string) {
        await serverApi.addMessage(msg, id);
    }

    public  userValidation(username: string, password: string) {
        return serverApi.checkLogin(username, password);
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