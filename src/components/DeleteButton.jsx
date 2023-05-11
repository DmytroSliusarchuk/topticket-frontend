import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import UserService from "../services/user.servise";
import {useMutation} from "@tanstack/react-query";
import {useLogout} from "../hooks/useLogout";


const DeleteButton = () => {
    const logout = useLogout()
    const navigate = useNavigate()
    const {mutate} = useMutation(UserService.deleteUser, {
        onSuccess: data => {
            logout()
            navigate("/")
        }
    });

    const deleteUser = event => {
        mutate();
    }

    return (
        <Link to={"#"} onClick={deleteUser} className="btn btn-danger">Delete Account</Link>
    );
};

export default DeleteButton