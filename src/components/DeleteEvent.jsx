import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import EventService from "../services/event.service";
import style from "../styles/editEvent.module.scss"

const DeleteEvent = ({id}) => {
    const navigate = useNavigate()
    const {mutate} = useMutation(EventService.deleteEvent, {
        onSuccess: data => {
            navigate("/account")
        }
    });

    const deleteEvent = event => {
        mutate({id: id});
    }

    return (
        <Link to={"#"} onClick={deleteEvent} className={`btn btn-danger ${style.rght} ${style.btnDangerEdit}`}>Delete Event</Link>
    );
};

export default DeleteEvent