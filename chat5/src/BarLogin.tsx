import * as React from 'react';
import {stateStoreService} from './state/StateService';
import {Link} from "react-router-dom";

class BarLogin extends React.Component {
    public onclickLoginHandler = () => {
        stateStoreService.setPanel(true);
    };

    public Login =() => {
        if(stateStoreService.getUserNameLogin()) {
            return (
                <>
                    <li><span style={{cursor: 'context-menu'}}>hello {stateStoreService.getUserNameLogin()}</span></li>
                    {/*<li><span onClick={this.onclickLogoutHandler}>Logout</span></li>*/}
                </>
            );
        }
        else {
            return (<Link to='/login'><li><span onClick={this.onclickLoginHandler}>Login</span></li></Link>);
        }
    }

    public render() {
        return (
            <nav>
                <Link to='/login'><button>Login</button></Link>
            </nav>
        );
    }
}

export default BarLogin;