import React, {useContext, useState} from 'react';
import styles from "../styles/login.module.scss"
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
import {useMutation} from "@tanstack/react-query";
import AuthService from "../services/auth.service";


const EnterPassword = () => {
    const [password, setPassword] = useState()
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
    const {forgetEmail} = useContext(AuthContext);

    const {mutate} = useMutation(AuthService.resetPassword, {
        onSuccess: data => {
            navigate("/login")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });
    const enterPassword = event => {
        event.preventDefault()
        mutate({"password": password, "email": forgetEmail})
    }
    return (
        <div>
            <Header/>
            <main>
                <div className={styles.formCenter}>
                    <h1 className={`main-heading ${styles.mainHeadingLogin}`}>Password</h1>
                    <form className={styles.formLogin} onSubmit={enterPassword} method="POST">
                        <div className="form-group">
                            <label htmlFor="password">Enter your new Password:</label>
                            <input type="password" className="form-control" id="password" name="password"
                                   value={password}
                                   onChange={e => setPassword(e.target.value)} required/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Wrong Password.</strong>
                        </div>}
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Enter</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default EnterPassword;