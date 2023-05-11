import React from 'react';
import {useQuery} from "@tanstack/react-query";
import EventService from "../services/event.service";
import EventItem from "./EventItem";


const EventsList = () => {
    const {data} = useQuery(["events"], () => EventService.getAll())

    if (!data) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Events not found!
            </h1>
        )
    }
    return (
        <main className="container">
            <h1 className="main-heading">Upcoming Events</h1>
            <div className="row events-list">
                {data.map(event => <EventItem key={event.idevent} event={event}/>)}
            </div>
        </main>
    );
};

export default EventsList;