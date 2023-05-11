import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventDetails from "../components/EventDetails";

const Event = () => {
    return (
        <div>
            <Header/>
            <EventDetails/>
            <Footer/>
        </div>
    );
};

export default Event;