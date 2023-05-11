import React, {useState} from 'react';
import {useMutation} from "@tanstack/react-query";
import Header from "../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import Footer from "../components/Footer";
import TicketService from "../services/ticket.service";
import style from "../styles/editEvent.module.scss";


const CreateTickets = () => {
    const {id} = useParams()

    const [ticketsData, setTicketsData] = useState("")

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const {mutate, isLoading} = useMutation(TicketService.createTicket, {
        onSuccess: data => {
            navigate("/account")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });

    const create = event => {
        event.preventDefault();
        mutate({"id":id, "tickets": ticketsData});
    }

    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <h1 className={`main-heading ${style.mainHeadingEdit}`}>Tickets Creating</h1>
                    <form className={style.editForm} id="editform" onSubmit={create}>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Enter tickets(seat price; )</label>
                            <textarea className={`form-control ${style.textareaEdit}`} id="inputDescription"
                                      name="decriptionarea" rows="4"
                                      cols="50" form="editform"
                                      onChange={e => setTicketsData(e.target.value)}/>
                        </div>
                        <div className={style.buttons}>
                            <button type="submit" className="btn btn-primary">Add Tickets</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default CreateTickets;