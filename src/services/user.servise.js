import axios from "axios";

export default class UserService {

    static async getUser() {
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.get('http://127.0.0.1:8080/user', {headers})
        return response.data;
    }

    static async getTickets() {
        const token = localStorage.getItem("auth")
        const headers = {
            Authorization: "Bearer " + token
        };
        const response = await axios.get('http://127.0.0.1:8080/tickets/user', {headers})
        return response.data;
    }

    static async updateUser(data){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.put('http://127.0.0.1:8080/user', data, {headers});
        return response.data;
    };

    static async deleteUser(){
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.delete('http://127.0.0.1:8080/user',{headers});
        return response.data;
    };

    static async getAll() {
        const token = localStorage.getItem("auth")
        const headers = {
            'Authorization': "Bearer " + token
        };
        const response = await axios.get('http://127.0.0.1:8080/users', {headers})
        return response.data;
    }
}