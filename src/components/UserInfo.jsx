import React from 'react';
import {useQuery} from "@tanstack/react-query";
import UserService from "../services/user.servise";
import styles from "../styles/account.module.scss"
import UserTickets from "./UserTickets";
import {Link, useNavigate} from "react-router-dom";
import DeleteButton from "./DeleteButton";


const UserInfo = () => {
    const navigate = useNavigate()

    const {data, isLoading} = useQuery({
        queryKey: ["userInfo"], queryFn: UserService.getUser, onError: (error) => {
            if (error.response.status === 401) {
                navigate("/login")
            }
        }
    })

    if (isLoading) {
        return "Loading..."
    }

    return (
        <main className="container">
            <h1 className="main-heading">My Account</h1>
            <div className="row">
                <div className="col-md-4 user-details">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Information</h5>
                            <p className="card-text">Username: {data.username}</p>
                            <p className="card-text">Name: {data.name}</p>
                            <p className="card-text">Surname: {data.surname}</p>
                            <p className="card-text">Phone: {data.phone}</p>
                            <p className="card-text">Email: {data.email}</p>
                            <p className="card-text">City: {data.city}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 events-list">
                    <h5>My Tickets</h5>
                    <UserTickets/>
                    <div className={`mt-4 ${styles.editButtons}`}>
                        <Link className="btn btn-primary mr-2" to={"/account_edit"}>Edit Account</Link>
                        <DeleteButton/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UserInfo