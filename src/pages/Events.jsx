import React from 'react';
import Header from "../components/Header";
import EventsList from "../components/EventsList";
import Footer from "../components/Footer";

const Events = () => {
    return (
        <div>
            <Header/>
            <EventsList/>
            <Footer/>
        </div>
    );
};

export default Events;