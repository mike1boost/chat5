import * as React from 'react';
import './App.css';

// import Iuser from './models/Iuser';
import LoginModal from "./LoginModal";

export enum ERROR_MSG{
    none,
    allGood,
    credentials,
    locked
}

interface ILoginPanelState {
    loggedInUser: any | null,
    errorMsg: ERROR_MSG,
    counter: number
}

interface ILoginPanelProps{
    history:any
}

class LoginPanel extends React.Component<ILoginPanelProps, ILoginPanelState> {

    constructor(props:ILoginPanelProps) {
        super(props);

        this.state = {
            loggedInUser: null,
            errorMsg: ERROR_MSG.none,
            counter: 0
        }
    }

    auth = (user: any): boolean => {
        return user.username == 'batman' && user.password == 'robin';
    };

    onLoginSubmitHandler =(user:any)=>{
        if(this.auth(user)){
            this.setState({
                loggedInUser: user,
                errorMsg: ERROR_MSG.allGood
            }, ()=>{
                this.props.history.push('/chat');
            })
        }
        else{
            if(this.state.counter===2){
                this.setState({
                    loggedInUser: null,
                    errorMsg: ERROR_MSG.locked
                });
            }
            else {
                this.setState((prev) => ({
                    loggedInUser: null,
                    errorMsg: ERROR_MSG.credentials,
                    counter: prev.counter + 1
                }));
            }
        }
    };
    //
    // public loginRender=()=>(
    //     this.state.redirect ? <Redirect to={{pathname:'/chat'}}/> :
    // )

    public render() {
        return (
            <LoginModal loginStatus={this.state.errorMsg} onSubmit={this.onLoginSubmitHandler}/>
        );
    }
}

export default LoginPanel;
