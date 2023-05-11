import React, {useContext, useState} from 'react';
import styles from "../styles/login.module.scss"
import {useMutation} from "@tanstack/react-query";
import AuthService from "../services/auth.service";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../context";


const Login = () => {
    const [userData, setUserData] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const {setIsAuth, setIsAdmin} = useContext(AuthContext);

    const {mutate, isLoading} = useMutation(AuthService.loginUser, {
        onSuccess: data => {
            setErrorMessage("")
            localStorage.setItem('auth', data.access_token)
            localStorage.setItem("role", data.role)
            setIsAuth(true)
            if(data.role === "Admin"){
                setIsAdmin(true)
            }
            navigate("/")
        },
        onError: () => {
            setErrorMessage("Error")
            console.log("error")
        }
    });
    const login = event => {
        event.preventDefault();
        mutate(userData);
    }

    return (
        <div>
        <Header/>
        <main>
            <div className={styles.formCenter}>
                <h1 className={`main-heading ${styles.mainHeadingLogin}`}>Login</h1>
                <form className={styles.formLogin} onSubmit={login} method="POST">
                    <div className="form-group">
                        <label htmlFor="username">Username/Email:</label>
                        <input type="text" className="form-control" id="username" name="username"
                               value={userData.username}
                               onChange={e => setUserData({...userData, username: e.target.value})} required/>
                    </div>
                    <div className={`form-group ${styles.formPassword}`}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" name="password"
                               value={userData.password}
                               onChange={e => setUserData({...userData, password: e.target.value})} required/>
                    </div>
                    <div className={styles.forget}>
                        <Link to={"/enter_email"}>Forget password</Link>
                    </div>

                    {errorMessage && <div className="alert alert-danger" role="alert">
                        <strong>Wrong username or password.</strong>
                    </div>}

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Login</button>
                        <div className={styles.register}>
                            <span>Don't have account? </span><Link to={"/register"}>Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </main></div>
    );
};

export default Login;