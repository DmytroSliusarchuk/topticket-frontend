import React from 'react';
import {useQuery} from "@tanstack/react-query";
import TicketService from "../services/ticket.service";


const TicketsList = ({id}) => {
    const {data, isLoading} = useQuery(["tickets"], () => TicketService.getAll(id))

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
                Tickets not found!
            </h3>
        )
    }
    
    return (
        <main className="container">
            <h2>All Tickets</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Seat Number</th>
                        <th>Price</th>
                        <th>Is Bought</th>
                        <th>Is Booked</th>
                        <th>UserID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(ticket => <tr key={ticket.idticket}>
                        <td>{ticket.seat_number}</td>
                        <td>{ticket.price}</td>
                        <td>{`${ticket.is_bought}`}</td>
                        <td>{`${ticket.is_booked}`}</td>
                        <td>{ticket.iduser}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default TicketsList;