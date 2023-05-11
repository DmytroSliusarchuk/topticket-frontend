import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useParams} from "react-router-dom";
import TicketsList from "../components/TicketsList";


const EventTickets = () => {
    const {id} = useParams()
    return (
        <div>
            <Header/>
            <TicketsList id={id}/>
            <Footer/>
        </div>
    );
};

export default EventTickets