import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import UserService from "../services/user.servise";
import styles from "../styles/account.module.scss"
import EventName from "./EventName";
import BuyButton from "./BuyButton";
import CancelBooking from "./CancelBooking";


const UserTickets = () => {
        const [active, setActive] = useState(0)
        const {data, isLoading} = useQuery(["userTickets", active], () => UserService.getTickets())

        if (isLoading) {
            return (
                <h5 style={{textAlign: 'center', marginTop: '120px'}}>
                    Loading...
                </h5>
            )
        }
        if (data.length === 0) {
            return (
                <h3 style={{textAlign: 'center', marginTop: '120px'}}>
                    Tickets not found!
                </h3>
            )
        }

        return (
            <ul className="list-group" key={active}>
                {data.map(ticket => {
                    if (ticket.is_bought) {
                        return (
                            <li className="list-group-item" key={ticket.idticket}><EventName id={ticket.idevent}/>
                                <span
                                    className={styles.seatNumber}>{ticket.seat_number}
                            </span>
                            </li>)
                    } else {
                        return (
                            <li className="list-group-item" key={ticket.idticket}><EventName id={ticket.idevent}/>
                                <span
                                    className={styles.seatNumber}>{ticket.seat_number}</span>
                                <a className={styles.edit} onClick={() => {
                                    setTimeout(() => {
                                        setActive(Math.random)
                                    }, 500);
                                }}>
                                    <CancelBooking id={ticket.idticket}/>
                                </a>
                                <a className={styles.edit} onClick={() => {
                                    setTimeout(() => {
                                        setActive(Math.random)
                                    }, 500);
                                }}>
                                    <BuyButton id={ticket.idticket} classNames={`btn btn-primary mr-2`}/>
                                </a>
                            </li>)
                    }
                })}
            </ul>
        );
    }
;

export default UserTickets