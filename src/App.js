import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  }

  const updateUser = (index, updatedUser) => {
    const updatedUsers = [...users];
    updatedUsers[index] = updatedUser;
    setUsers(updatedUsers);
  }

  const editUser = (index) => {
  setEditingUser({ ...users[index] });
}


  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  }

  return (
    <div className='container'>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
        setEditingUser={setEditingUser}
      />
      <UserList
        users={users}
        editUser={editUser}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
