import React from 'react';
import {useQuery} from "@tanstack/react-query";
import UserService from "../services/user.servise";
import UsersListRow from "./UsersListRow";


const UsersList = () => {
    const {data, isLoading} = useQuery(["users"], () => UserService.getAll())


    if(isLoading){
        return (
            <h5 style={{textAlign: 'center'}}>
                Loading...
            </h5>
        )
    }

    if (!data === 0) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Users not found!
            </h1>
        )
    }

    return (
        <main className="container">
            <h2>User Listing</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>City</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(user => <UsersListRow key={user.iduser} user={user}/>)}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default UsersList;