import React from 'react';
import {Link} from "react-router-dom";
import styles from "../styles/events.module.scss"


const EventItem = ({event, key}) => {
    return (
        <div className="col-md-6 mb-4" key={key}>
            <div className="card">
                <img src={"static/images/" + event.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className={styles.cardTitle}>{event.name}</h5>
                    <p className={styles.cardText}>{event.description}</p>
                    <button className={styles.buyTicket}>
                        <Link className={`btn btn-primary ${styles.eventCard}`} to={`/events/${event.idevent}`}>Buy Tickets</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventItem;