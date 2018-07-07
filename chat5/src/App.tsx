import * as React from 'react';
import './App.css';
import {Link, Route, Switch} from "react-router-dom"
import ChatTree from "./ChatTree";
import Main from "./Main";
import {stateStoreService} from "./state/StateService";
import CreateAndEditUser from "./view/create-edit-user";
import MangerUsers from "./view/mangerUsers"
import ManageGroups from "./view/manageGroups"
import LoginPanel from "./LoginPanel";
import BarLogin from "./BarLogin";
import * as io from 'socket.io-client';
export const socket = io('http://localhost:4000');

interface IAppState{
    users:any[],
    groups:any[],
    items:any[],
    messages:any[],
    groupId?:string
}

class App extends React.Component<{},IAppState> {
    constructor(props:{}){
        super(props);
        this.state={
            users:[],
            groups:[],
            items:[],
            messages:[]

        };
    }

    componentDidMount() {
        stateStoreService.initData()
            .then((users) => {
                this.setState({users})
            });

        stateStoreService.getItems()
            .then((items) => {
                this.setState({items})
            });

        stateStoreService.getGroups()
            .then((groups)=>{
                this.setState({groups})
            });

        socket.on('msg', (msg) => {
            this.setState((prevState) => {
                return {
                    messages: [
                        ...prevState.messages, msg
                    ]
                }
            })
        });
    }

    onEdit = (user: any) => {
        delete user['password'];
        stateStoreService.updateUsers(user)
            .then(() => {
                this.setState({users: stateStoreService.getUsers()})
            });
    };

    onDelete = (id: any)=>{
        stateStoreService.deleteUser(id)
            .then(() => {
                this.setState({users: stateStoreService.getUsers()})
            });
    };

    onSelected = (id:string)=>{
        const selectedToChat = stateStoreService.getSelectedToChat();
        if(selectedToChat.id) {
            socket.emit('leave-group', selectedToChat.id);
        }
        this.setState({messages: stateStoreService.getMsg(), groupId:id});
        socket.emit('join-group', id);
    };

    addMessage=(msg:string)=>{
        this.setState((prevState) => {
            return {
                messages: [
                    ...prevState.messages, msg
                ]
            }
        })
    };

    onAuthorization = async (user: any) => {
        const status = await stateStoreService.userValidation(user.username, user.password);
        return status.status === "successful login"
    };

    onAddUserToGroup = async (groupId:string, userId:string) => {
        stateStoreService.addUserToGroup(groupId, userId)
            .then((items)=>{
                this.setState({items})
            })
    };

    public chatRender = () => (
        <>
            <nav>
                <BarLogin/>
                <Link to="/users"><button>manage users</button></Link>
                <Link to="/groups"><button>manage groups</button></Link>
            </nav>

            <div className='App'>
                <div className="SideBar"><ChatTree onSelected={this.onSelected} items={this.state.items}/> </div>
                <div className="Main"><Main addMessage={this.addMessage} groupId={this.state.groupId} messages={this.state.messages}/></div>
            </div>
        </>
    );

    loginRender = (props:any) => (<LoginPanel onAuthorization={this.onAuthorization} {...props}/>);

    createEditUserRender = (props: any) => (<CreateAndEditUser onEdit={this.onEdit} {...props}/>);

    managerUsersRender = () => (<MangerUsers onDelete={this.onDelete} users={this.state.users}/>);

    manageGroupsRender = () => (<ManageGroups onAddUserToGroup={this.onAddUserToGroup} users={this.state.users} groups={this.state.groups}/>);

    public render() {
        return (
            <>
                <Route exact={true} path='/login' render={this.loginRender}/>
                <Switch>
                    <Route exact={true} path="/users" render={this.managerUsersRender}/>
                    <Route exact={true} path="/users/:id/edit" render={this.createEditUserRender}/>
                    <Route exact={true} path="/groups" render={this.manageGroupsRender}/>
                    <Route exact={true} path='/' render={this.chatRender}/>
                </Switch>
            </>
        );
    }
}

export default App;
