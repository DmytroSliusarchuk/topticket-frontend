import React from 'react';

const UsersListRow = ({user, key}) => {
    return (
        <tr key={key}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.city}</td>
            <td>{user.role}</td>
        </tr>
    );
};

export default UsersListRow;