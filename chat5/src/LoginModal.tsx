import * as React from 'react';
import Field from './Field';
import {ERROR_MSG} from "./LoginPanel";

interface ILoginModalProps {
    onSubmit: (u: any) => void,
    loginStatus: ERROR_MSG
}

interface ILoginModalState {
    user: any
}

export default class LoginModal extends React.Component<ILoginModalProps, ILoginModalState> {

    private messages = {
        [ERROR_MSG.allGood]: 'you\'re logged in!!!',
        [ERROR_MSG.credentials]: 'username or password are wrong!',
        [ERROR_MSG.locked]: 'you\'re locked!!'
    };

    private colors = {
        [ERROR_MSG.allGood]: 'green',
        [ERROR_MSG.credentials]: 'red',
        [ERROR_MSG.locked]: 'red'
    }

    constructor(props:ILoginModalProps) {
        super(props);
        this.state = {
            user: {username: '', password: '', id: '', age:''}
        }
    }

    updateField = (fieldName: string, value: string) => {

        this.setState(prevState => {
            return {
                user: {
                    ...this.state.user,
                    [fieldName]: value
                }
            }
        })
    };

    submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.props.onSubmit(this.state.user);
    };



    render() {
        return (
            <form>
                <Field name={'username'} type={'text'} onChange={this.updateField}/>
                <Field name={'password'} type={'password'} onChange={this.updateField}/>

                <button type="button" onClick={this.submitHandler}>Login</button>
                <p style={{color:this.colors[this.props.loginStatus]}}>{this.messages[this.props.loginStatus]}</p>
            </form>
        );
    }
}