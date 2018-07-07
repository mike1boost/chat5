import * as React from 'react'
import {Link} from "react-router-dom";
import Iuser from "../models/Iuser";
import Igroup from "../models/Igroup";

interface Iprops{
    users:Iuser[]
    groups:Igroup[]
    onAddUserToGroup(groupName:string, username:string):any
}

class manageGroups extends React.Component<Iprops,any>{

    constructor(props:any){
        super(props);
        this.state = {
            selectedGroup:''
        }
    }

    render() {
        const option = this.props.users ? this.props.users.map((user, index) => {
            return (
                <option key={index} value={user.id}>{user.username}</option>
            );
        }) : null;

        const groups = this.props.groups ? this.props.groups.map((group, index) => {
            return (
                <tr className="groupInList" key={index}>
                    <td>{group.groupName}</td>
                    <td>
                        <select  onChange={this.handleChange}>
                            <option  value=''>choose user</option>
                            {option}
                        </select>
                    </td>
                    <td>
                        <button id="groupManage"  onClick={this.onSubmit.bind(this,group.id)}>submit</button>
                    </td>
                </tr>
            );
        }) : null;

        return (
            <>
                <h1>Manage Groups</h1>
                <Link to="/">Back </Link>

                <table id="group">
                    <thead>
                    <tr>
                        <th>Group name</th>
                        <th>Add user</th>
                        <th>Submit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {groups}
                    </tbody>
                </table>
            </>
        )
    }

    handleChange = (event)=> {
        this.setState({selectedGroup:event.target.value});
    };

    onSubmit = (groupName:string)=>{
        this.setState({selectedGroup:''});
        this.props.onAddUserToGroup(groupName, this.state.selectedGroup);
    };
}

export default manageGroups