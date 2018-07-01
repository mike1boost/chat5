import * as React from 'react';
import './App.css';
import {Link, Route, Switch} from "react-router-dom"
import ChatTree from "./ChatTree";
import Main from "./Main";
import {stateStoreService} from "./state/StateService";
import CreateAndEditUser from "./view/create-edit-user";
import MangerUsers from "./view/mangerUsers"
import LoginPanel from "./LoginPanel";
import BarLogin from "./BarLogin";


// interface IappState{
//     users:Array<any>
//     items:Array<any>
// }

class App extends React.Component<{},any> {
    constructor(props:any){
        super(props);
        // const Item = stateStoreService.getItemss()
        //     .then((Item)=>{
        //         console.log(Item);
        //     })
        this.state={
            users:[],
            items:[]
        };
        // stateStoreService.subscribe(()=>{
        //     this.forceUpdate();
        // })
    }

    componentDidMount(){
        stateStoreService.initData()
            .then((users_) => {
                this.setState({users: users_})
            });

        stateStoreService.getItemss()
            .then((Items) => {
                this.setState({items: Items})
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


    public chatRender = () => (
        <>
            <nav>
                <Link to="/users"><button>users</button></Link>
                <BarLogin/>
            </nav>

            <div className='App'>
                <div className="SideBar"><ChatTree items={this.state.items} /> </div>
                <div className="Main"><Main /></div>
            </div>
        </>
    );

    loginRender = (props:any) => (<LoginPanel {...props}/>);

    createEditUserRender = (props: any) => (<CreateAndEditUser onEdit={this.onEdit} {...props}/>);

    managerUsersRender = () => (<MangerUsers onDelete={this.onDelete} users={this.state.users}/>);

    public render() {
        return (
            <>
                <Route exact={true} path='/login' render={this.loginRender}/>
                <Switch>
                    <Route exact={true} path="/users" render={this.managerUsersRender}/>
                    <Route exact={true} path="/users/:id/edit" render={this.createEditUserRender}/>
                    <Route exact={true} path='/' render={this.chatRender}/>
                </Switch>
            </>
        );
    }
}

export default App;
