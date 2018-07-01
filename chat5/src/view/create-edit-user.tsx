import * as React from 'react';
import {Link} from "react-router-dom";

interface CreateEditUserProps{
    onEdit(user:any):any,
    location:any
}


interface CreateEditUserState{
    selectedUser : {
        username:string,
        age:string,
        password:string,
        id:string
    }
}

class CreateAndEditUser extends React.Component<CreateEditUserProps, CreateEditUserState>{
    constructor(props:CreateEditUserProps){
        super(props);
        this.state = {
            selectedUser: {
                username: this.props.location.state.user.username,
                age: this.props.location.state.user.age,
                id: this.props.location.state.user.id,
                password:this.props.location.state.user.password
            },
        }
    }

    updateField=(field:string, value:string)=>{
        this.setState((prevState:any)=>{
            return{
                selectedUser:{
                    ...prevState.selectedUser,
                    [field] : value

                }
            }
        })
    }

    onUpdate = (e:any)=>{
        const field = e.target.id;
        const value = e.target.value;
        this.updateField(field, value);
    }

    save = ()=>{
        this.props.onEdit(this.state.selectedUser);
    }

    render(){
        return(
            <div>
                <Link to='/users'><button>back</button></Link>
                <h2>Create/Edit User</h2>
                <p>Username: <input type="text" id="username" value={this.state.selectedUser.username} onChange={this.onUpdate}/></p>
                <p>Password: <input type="text" id="password" value={this.state.selectedUser.password} onChange={this.onUpdate}/></p>
                <p>Age: <input type="number" id="age" value={this.state.selectedUser.age} onChange={this.onUpdate}/></p>
                <input type="button" value="save" onClick={this.save}/>
                <input type="button" value="create" />
            </div>
        )
    }
}

export default CreateAndEditUser;