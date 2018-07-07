import * as React from 'react';
import './Main.css';
import {stateStoreService} from "./state/StateService";
import {socket} from './App';

interface IMainState{
    input:string,
}

interface IMainProps{
    messages:any[],
    groupId?:string,
    addMessage(msg:string):void
}


class Main extends React.Component<IMainProps,IMainState>{
    constructor(props:IMainProps){
        super(props);
        this.state= {
            input: ''
        }
    }

    public addMassage2List = ()=>{
        socket.emit('msg', this.props.groupId, this.state.input);
        stateStoreService.setMsg(this.state.input, this.props.groupId);
        this.props.addMessage(this.state.input);
        this.setState({input:' '});
    };

    public addMassage = (event:any)=>{
        this.setState({input:event.target.value});
    };

    public render(){
        let list;
        if(this.props.messages.length){
            list = this.props.messages.map((message:string, idx:number)=>{
                return <li  key={idx} > <div className="Me">{message}</div> </li>
            })
        }
        return (
            <div className="MainContent">
                <header className="Header">hello chat</header>
                <ul className="massageBox">
                    {list}
                </ul>
                <footer>
                    <input id="inputMassage" onChange={this.addMassage} value={this.state.input} type="text" placeholder="Type a message"/>
                    <button id="sendBtn" onClick={this.addMassage2List}>Send</button>
                </footer>
            </div>
        )
    }
}
export default Main;