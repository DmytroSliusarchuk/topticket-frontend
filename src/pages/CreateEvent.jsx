import React, {useState} from 'react';
import {useMutation} from "@tanstack/react-query";
import Header from "../components/Header";
import {Link, useNavigate} from "react-router-dom";
import Footer from "../components/Footer";
import EventService from "../services/event.service";
import style from "../styles/editEvent.module.scss"


const CreateEvent = () => {
    const [eventData, setEventData] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const {mutate, isLoading} = useMutation(EventService.createEvent, {
        onSuccess: data => {
            navigate("/account")
        },
        onError: () => {
            setErrorMessage("Error")
        }
    });
    const create = event => {
        event.preventDefault();
        const formData = new FormData()
        for (let i in eventData)
        {
            formData.append(i, eventData[i])
        }
        console.log(formData.getAll("name"))
        mutate(formData);
    }

    return (
        <div>
            <Header/>
            <main>
                <div className="container">
                    <h1 className={`main-heading ${style.mainHeadingEdit}`}>Event Creating</h1>
                    <form className={`${style.editForm} ${style.createForm}`} onSubmit={create} encType="multipart/form-data">
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
                            <input type="text" className="form-control" id="inputAddress"
                                   value={eventData.address || ''}
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
                            <label htmlFor="image">Title Image</label>
                            <input type="file" id="image" name="image" accept="image/*" onChange={e => {
                                setEventData({...eventData, file: e.target.files[0]})
                            }} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputDescription">Description</label>
                            <textarea className={`form-control ${style.textareaEdit}`} id="inputDescription"
                                      name="decriptionarea" rows="4"
                                      cols="50" form="editform" value={eventData.description || ''}
                                      onChange={e => setEventData({...eventData, description: e.target.value})}/>
                        </div>
                        <div className={style.buttons}>
                            <button type="submit" className={`btn btn-primary ${style.rght}`}>Create Event</button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default CreateEvent;