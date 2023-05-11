import React from 'react';
import {useQuery} from "@tanstack/react-query";
import EventService from "../services/event.service";
import {Link} from "react-router-dom";
import styles from "../styles/account.module.scss"

const AdminEvents = () => {
        const {data, isLoading} = useQuery(["adminEvents"], EventService.getAll)

        if (isLoading) {
            return (
                <h5 style={{textAlign: 'center'}}>
                    Loading...
                </h5>
            )
        }
        if (data.length === 0) {
            return (
                <h3 style={{textAlign: 'center', marginTop: '120px'}}>
                    Events not found!
                </h3>
            )
        }

        return (
            <ul className="list-group">
                {data.map(event => {
                    return (
                        <li className="list-group-item" key={event.idevent}><span><Link
                            to={"/events/" + event.idevent}>{event.name}</Link></span>
                            <span className={styles.edit}><Link to={`/edit_event/${event.idevent}`}
                                                                className={`btn btn-primary mr-2 ${styles.editBtn}`}>Edit</Link></span>
                            <span className={styles.edit}><Link to={`/all_tickets/${event.idevent}`}
                                                                className={`btn btn-primary mr-2 ${styles.editBtn}`}>All Tickets</Link></span>
                        </li>)
                })}
            </ul>
        );
    }
;

export default AdminEvents