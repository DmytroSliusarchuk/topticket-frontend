import React, {useContext, useState} from 'react';
import {useMutation} from "@tanstack/react-query";
import AuthService from "../services/auth.service";
import Header from "../components/Header";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import styles from "../styles/registration.module.scss"


const Register = () => {
    const {setIsAuth} = useContext(AuthContext)
    const [userData, setUserData] = useState({
        username: '',
        name: '',
        surname: '',
        email: '',
        phone: '',
        city: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const {mutate, isLoading} = useMutation(AuthService.registerUser, {
        onSuccess: data => {
            setErrorMessage("")
            localStorage.setItem('auth', data.access_token)
            setIsAuth(true)
            navigate("/")
        },
        onError: () => {
            setErrorMessage("Error")
            console.log("error")
        }
    });
    const register = event => {
        event.preventDefault();
        mutate(userData);
    }

    return (
        <div>
            <Header/>
            <main>
                <div className={`container ${styles.formCenter}`}>
                    <h1 className={`main-heading ${styles.mainHeadingReg}`}>Registration</h1>
                    <form className={styles.formRegister} onSubmit={register} method="POST">
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
                            <input type="password" className="form-control" id="password" name="password" value={userData.password}
                                   onChange={e => setUserData({...userData, password: e.target.value})} required/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Error:</strong> Wrong data.
                        </div>}

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;