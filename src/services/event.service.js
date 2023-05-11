import axios from "axios";

export default class EventService {
    static async getAll() {
        const response = await axios.get('http://127.0.0.1:8080/event')
        return response.data;
    }
    static async getEvent(id) {
        const response = await axios.get(`http://127.0.0.1:8080/event/${id}`)
        return response.data;
    }

    static async updateEvent(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.put('http://127.0.0.1:8080/event', data, {headers});
        return response.data;
    };

    static async deleteEvent (data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.delete('http://127.0.0.1:8080/event/' + data.id,{headers});
        return response.data;
    };

    static async createEvent(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.post('http://127.0.0.1:8080/event', data, {headers});
        return response.data;
    };

}



