import axios from "axios";

export default class TicketService {
    static async getTickets(id) {
        const response = await axios.get(`http://127.0.0.1:8080/tickets/event/${id}`)
        return response.data;
    }

    static async buyTicket(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.put('http://127.0.0.1:8080/ticket/buy', data, {headers});
        return response.data;
    };

    static async bookTicket(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.put('http://127.0.0.1:8080/ticket/book', data, {headers});
        return response.data;
    };

    static async cancelBooking(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.put('http://127.0.0.1:8080/ticket/cancel_book', data, {headers});
        return response.data;
    };

    static async createTicket(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.post('http://127.0.0.1:8080/tickets/event', data, {headers});
        return response.data;
    };

    static async getAll(id) {
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.get('http://127.0.0.1:8080/tickets/event/' + id, {headers})
        return response.data;
    }
}