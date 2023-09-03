import React from 'react';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <aside>
        <ul>
        {users.map((user, index) => (
            <li key={index}>
            {user.name} {user.lastname} 
            | Phone: {user.phone} 
            | Year of Birth: {user.year} 
            | Gender: {user.gender}
            <button onClick={() => editUser(index)}>Edit</button>
            <button onClick={() => deleteUser(index)}>Delete</button>
            </li>
        ))}
        </ul>
    </aside>
  );
}

export default UserList;
