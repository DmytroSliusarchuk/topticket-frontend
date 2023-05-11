import React from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import TicketService from "../services/ticket.service";


const BookButton = ({id}) => {
    const navigate = useNavigate()
    const {mutate} = useMutation(TicketService.bookTicket, {
        onSuccess: data => {
            navigate("/account")
        }
    });

    const book = event => {
        mutate({idticket: id});
    }

    return (
        <button type="button" onClick={book} className="btn btn-primary">Book Ticket</button>
    );
};

export default BookButton