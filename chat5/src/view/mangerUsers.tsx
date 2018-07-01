import * as React from 'react';
import Iuser from "../models/Iuser";
import './man.css'
import {Link} from "react-router-dom";

interface Iprops {
    users: Iuser[],
    onDelete: any
}

class mangerUsers extends React.Component <Iprops, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedUser: {
                username: '',
                age: '',
                id: ''
            }
        }
    }

    render() {
        const users = this.props.users ? this.props.users.map((user, index) => {
            return (
                <tr className="userInList" key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.age}</td>
                    <td>
                        <Link to={{pathname:`/users/${user.id}/edit`, state:{user}}}><button>edit</button></Link>
                    </td>
                    <td>
                        <button id="userManage" onClick={this.handleDeleteUser.bind(this, user.id)}>delete</button>
                    </td>
                </tr>
            );
        }) : null;

        return (
            <>
                <h1>Manage Users</h1>
                <Link to="/">Back </Link>

                <table id="t01">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users}
                    </tbody>
                </table>
            </>
        )
    }

    handleDeleteUser = (id: any)=> {
     this.props.onDelete(id);
    }
}

export default mangerUsers