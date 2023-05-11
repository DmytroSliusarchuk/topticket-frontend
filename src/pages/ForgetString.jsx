import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/login.module.scss"
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
import {useMutation} from "@tanstack/react-query";
import AuthService from "../services/auth.service";

const ForgetString = () => {
    const [emailString, setEmailString] = useState("")
    const [errorMessage, setErrorMessage] = useState('');
    const {secureString} = useContext(AuthContext);
    const navigate = useNavigate()


    const enterString = event => {
        event.preventDefault()
        if (emailString.trim() === secureString.trim()) {
            navigate("/enter_password")
        } else {
            setErrorMessage("Error")
            console.log(secureString)
            console.log(emailString)
        }
    }

    return (
        <div>
            <Header/>
            <main>
                <div className={styles.formCenter}>
                    <h1 className={`main-heading ${styles.mainHeadingLogin}`}>Email Code</h1>
                    <form className={styles.formLogin} onSubmit={enterString}>
                        <div className="form-group">
                            <label htmlFor="code">Enter Code from Email:</label>
                            <input type="text" className="form-control" id="code" name="code"
                                   value={emailString}
                                   onChange={e => setEmailString(e.target.value)} required/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Wrong Code.</strong>
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

export default ForgetString;