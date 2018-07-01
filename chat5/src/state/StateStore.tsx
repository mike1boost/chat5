import Iuser from "../models/Iuser";


export interface IStateStore {
    items: Array<any>;
    selectedToChat:object;
    userNameLogin: any;
    showLoginPanel:boolean
    users: Array<Iuser>
    getMassage():any;
    getItems():any;
    setMassage(val:any):any;
    getSelectedToChat():any
    setSelectedToChat(item:any):any
    getUserNameLogin():any
    setUserNameLogin(userName:any):void
    getPanel():boolean
    setPanel(showLogin:boolean):void
}

export class StateStore implements IStateStore {
    items = [];
    selectedToChat = {
        "id": "",
        "type": "",
        "name": "",
        "message": [],
        "items": []
    };
    userNameLogin = null;
    showLoginPanel = false;
    users = [];

    static instance: IStateStore;


    public getUserNameLogin(){
        return this.userNameLogin;
    }

    public setUserNameLogin(userName:any){
        this.userNameLogin = userName;
    }

    public getMassage(){
        return this.selectedToChat.message;
    }

    setMassage(val:any){
        this.selectedToChat.message = this.selectedToChat.message.concat(val);
        return this.selectedToChat.id;
    }

    getItems(){return this.items}

    getSelectedToChat(){return this.selectedToChat}
    setSelectedToChat(item:any){
        this.selectedToChat = item;
    }

    public getPanel(){
        return this.showLoginPanel;
    }

    public setPanel(showLogin:boolean){
        this.showLoginPanel = showLogin;
    }

    static getInstance() {
        if (!StateStore.instance) {
            StateStore.instance = new StateStore();
        }
        return StateStore.instance;
    }
}
