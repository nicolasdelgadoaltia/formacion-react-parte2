import React, { useState } from "react";
import CreateForm from "./components/createForm";
import UsersTable from "./components/table";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [createFormVisible, setCreateFormVisible] = useState(false);

  const addUser = user => {
    setUsers([...users, user]);
    setCreateFormVisible(false);
  }

  const deleteUser = userIndex => {
    const newUsers = [...users];
    newUsers.splice(userIndex, 1);
    setUsers(newUsers);
  };

  const showCreateForm = () => setCreateFormVisible(true);

  return (
    <div className="App">
      { createFormVisible ? 
        <CreateForm onCreateUser={addUser} /> :
        <>
        { 
          users.length === 0 ?
            <p>There are no users introduced.</p> :
            <UsersTable users={users} onDeleteUser={deleteUser} />
        }<br/><br/>
        <button onClick={showCreateForm}>Add new user</button>
      </> 
    }
    </div>
  );
}
