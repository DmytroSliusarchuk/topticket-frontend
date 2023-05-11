import React, {useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import TicketService from "../services/ticket.service";


const TicketsSelect = ({id, setSelected}) => {

    const {data, isLoading} = useQuery(["ticketsList"], () => TicketService.getTickets(id))


    if (isLoading) {
        return <select className="form-control seats" id="seat">
        </select>
    }

    const selectTicket = (event) => {
        setSelected(event.target.value);
    }


    return (
        <select className="form-control seats" id="seat" onChange={ (event) => selectTicket(event)}>
            <option> </option>
            {data.map(event => {
                if (!event.iduser) {
                    return <option
                        value={event.idticket}>{`Seat number: ${event.seat_number} Price: ${event.price}`}
                           </option>
                }
            })}
        </select>
    );
};

export default TicketsSelect