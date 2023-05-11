import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from "@tanstack/react-query";
import Header from "../components/Header";
import {Link, useNavigate, useParams} from "react-router-dom";
import style from "../styles/editEvent.module.scss"
import Footer from "../components/Footer";
import EventService from "../services/event.service";
import DeleteEvent from "../components/DeleteEvent";


const EditEvent = () => {
    const {id} = useParams()
    const data = useQuery(["eventInfo", id], () => EventService.getEvent(id))

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const [eventData, setEventData] = useState({})

    useEffect(() => {
        setEventData({...data.data})
    }, [data.data]);

    const {mutate, isLoading} = useMutation(EventService.updateEvent, {
        onSuccess: data => {
            navigate("/account")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });

    const update = event => {
        event.preventDefault();
        mutate(eventData);
    }

    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <h1 className={`main-heading ${style.mainHeadingEdit}`}>Event Editing</h1>
                    <form className={style.editForm} onSubmit={update}>
                        <div className="form-group">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" className="form-control" id="inputName" value={eventData.name || ''}
                                   onChange={e => setEventData({...eventData, name: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity" value={eventData.city || ''}
                                   onChange={e => setEventData({...eventData, city: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" value={eventData.address || ''}
                                   onChange={e => setEventData({...eventData, address: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputVisitors">Max Visitors</label>
                            <input type="number" className="form-control" id="inputVisitors"
                                   value={eventData.max_visitors || ''}
                                   onChange={e => setEventData({...eventData, max_visitors: e.target.value})}
                                   required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDate">Date</label>
                            <input type="text" className="form-control" id="inputDate" value={eventData.date || ''}
                                   onChange={e => setEventData({...eventData, date: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Description</label>
                            <textarea className={`form-control ${style.textareaEdit}`} id="inputDescription"
                                      name="decriptionarea" rows="4"
                                      cols="50" form="editform" value={eventData.description || ''}
                                      onChange={e => setEventData({...eventData, description: e.target.value})}/>
                        </div>
                        {errorMessage && <div className="alert alert-danger" role="alert">
                            <strong>Error:</strong> Wrong data. </div>}
                        <div className={style.buttons}>
                            <Link to={`/create_tickets/${id}`} className="btn btn-primary ">Add Tickets</Link>
                            <button type="submit" className={`btn btn-primary ${style.rght}`}>Save Changes</button>
                            <DeleteEvent id={id}/>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default EditEvent;