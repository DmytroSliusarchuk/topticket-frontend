import React, {useState} from 'react';
import {useMutation, useQuery} from "@tanstack/react-query";
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import UserService from "../services/user.servise";
import style from "../styles/editAccount.module.scss"
import Footer from "../components/Footer";


const EditAccount = () => {
    const token = localStorage.getItem("auth")
    const {data} = useQuery(["userInfo"], () => UserService.getUser(token))

    const [userData, setUserData] = useState({
        ...data
    })

    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const {mutate, isLoading} = useMutation(UserService.updateUser, {
        onSuccess: data => {
            navigate("/account")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });
    const update = event => {
        event.preventDefault();
        mutate(userData);
    }

    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <h1 className={`main-heading ${style.mainHeadingEdit}`}>Account Editing</h1>
                    <form className={style.editForm} onSubmit={update}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" value={userData.username}
                                   onChange={e => setUserData({...userData, username: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" value={userData.name}
                                   onChange={e => setUserData({...userData, name: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input type="text" className="form-control" id="surname" value={userData.surname}
                                   onChange={e => setUserData({...userData, surname: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" value={userData.email}
                                   onChange={e => setUserData({...userData, email: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input type="tel" className="form-control" id="phone" value={userData.phone}
                                   onChange={e => setUserData({...userData, phone: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <input type="text" className="form-control" id="city" value={userData.city}
                                   onChange={e => setUserData({...userData, city: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" name="password"
                                   onChange={e => setUserData({...userData, password: e.target.value})} required/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Error:</strong> Wrong data.
                        </div>}
                        <button type="submit" className="btn btn-primary">Save Changes</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default EditAccount;