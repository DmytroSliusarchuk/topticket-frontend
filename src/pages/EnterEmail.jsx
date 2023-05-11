import React, {useContext, useState} from 'react';
import styles from "../styles/login.module.scss"
import Header from "../components/Header";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context";
import {useMutation} from "@tanstack/react-query";
import AuthService from "../services/auth.service";


const EnterEmail = () => {
    const [email, setEmail] = useState()
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    const {setForgetEmail, setSecureString} = useContext(AuthContext);

    const mailServer = useMutation(AuthService.sendEmail);

    function sendEmail() {

        function generateString(length) {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let result = ' ';

            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }

        const secure_code = generateString(6)

        const emailData = {
            'sender': {
                'name': 'TopTicket',
                'email': 'TopTicket@test.com'
            },
            'to': [
                {
                    'email': email,
                    'name': 'User'
                }
            ],
            'subject': 'Password TopTicket Reset',
            'htmlContent': `<html><head></head><body><h1>This is your code for password reset.</h1><h3>${secure_code}</h3></body></html>`,
            'headers': {
                'charset': 'iso-8859-1'
            }
        }

        setSecureString(secure_code)

        mailServer.mutate(emailData)
    }

    const {mutate} = useMutation(AuthService.verifyEmail, {
        onSuccess: data => {
            setForgetEmail(email)
            sendEmail()
            navigate("/forget_string")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });

    const enterEmail = event => {
        event.preventDefault()
        mutate({"email": email})
    }
    return (
        <div>
            <Header/>
            <main>
                <div className={styles.formCenter}>
                    <h1 className={`main-heading ${styles.mainHeadingLogin}`}>Enter your Email</h1>
                    <form className={styles.formLogin} onSubmit={enterEmail} method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)} required/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Wrong Email.</strong>
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

export default EnterEmail;