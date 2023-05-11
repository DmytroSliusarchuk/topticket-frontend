import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import EventService from "../services/event.service";
import TicketsSelect from "./TicketsSelect";
import styles from "../styles/event.module.scss"
import BuyButton from "./BuyButton";
import BookButton from "./BookButton";


const EventDetails = () => {
    const {id} = useParams()

    const [selectedTicket, setSelectedTicket] = useState()

    const {data, isLoading} = useQuery(["eventInfo"], () => EventService.getEvent(id))
    if (isLoading) {
        return "Loading"
    }
    return (
        <main className={`container ${styles.eventDetails}`}>
            <div className="row">
                <div className="col-md-6">
                    <img src={"/static/images/" + data.image} className="img-fluid" alt="..."/>
                </div>
                <div className="col-md-6">
                    <h2>{data.name}</h2>
                    <p>Date: {data.date}</p>
                    <p>City: {data.city}</p>
                    <p>Address: {data.address}</p>
                    <p>{data.description}</p>
                    {(localStorage.getItem("auth") && localStorage.getItem("role") !== "Admin") &&
                    <form>
                        <div className={styles.formGroup}>
                            <label htmlFor="seat">Select Seat Number:</label>
                            <TicketsSelect id={id} setSelected={setSelectedTicket}/>
                        </div>
                        <BuyButton classNames={"btn btn-primary"} id={selectedTicket}/>
                        <BookButton id={selectedTicket}/>
                    </form>}
                </div>
            </div>
        </main>
    );
};

export default EventDetails