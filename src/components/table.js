import React from "react";

const UsersTable = ({ users, onDeleteUser }) => {;

    return (<div>
        <h3>Users:</h3>
        <br/>
        <table width="100%">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Active</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { users.map(({ email, name, active}, index) => (
                <tr key={index}>
                    <td>{email}</td>
                    <td>{name}</td>
                    <td>{active ? "Yes" : "No"}</td>
                    <td><button onClick={() => onDeleteUser(index)}>Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
</div>);
}

export default UsersTable;