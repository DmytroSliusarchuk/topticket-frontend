import React from 'react';
import {useQuery} from "@tanstack/react-query";
import EventService from "../services/event.service";
import {Link} from "react-router-dom";
import style from "../styles/account.module.scss"


const EventName = ({id}) => {

    const {data, isLoading} = useQuery(["eventInfo", id], () => EventService.getEvent(id))
    if (isLoading) {
        return "Loading..."
    }
    return (
        <Link className={style.eventName} to={"/events/" + id}>{data.name}</Link>
    );
};

export default EventName