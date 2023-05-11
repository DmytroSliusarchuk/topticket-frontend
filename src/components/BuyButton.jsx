import React from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import TicketService from "../services/ticket.service";


const BuyButton = ({id, classNames}) => {

    const navigate = useNavigate()
    const {mutate} = useMutation(TicketService.buyTicket, {
        onSuccess: data => {
            navigate("/account")
        }
    });

    const buy = event => {
        mutate({idticket: id});
    }

    return (
        <button type="button" onClick={buy} className={classNames}>Buy Ticket</button>
    );
};

export default BuyButton