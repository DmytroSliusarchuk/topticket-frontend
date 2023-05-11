import React from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import TicketService from "../services/ticket.service";


const CancelBooking = ({id}) => {

    const navigate = useNavigate()
    const {mutate} = useMutation(TicketService.cancelBooking, {
        onSuccess: data => {
            navigate("/account")
        }
    });

    const cancel = event => {
        mutate({idticket: id});
    }

    return (
        <button type="button" onClick={cancel} className="btn btn-danger mr-2">Cancel Booking</button>
    );
};

export default CancelBooking