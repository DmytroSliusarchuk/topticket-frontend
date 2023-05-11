import axios from "axios";

export default class AuthService {
    static async loginUser(data){
        const response = await axios.post('http://127.0.0.1:8080/user/login', data);
        return response.data;
    };

    static async registerUser(data){
        const response = await axios.post('http://127.0.0.1:8080/user/register', data);
        return response.data;
    };

    static async verifyEmail(data){
        const response = await axios.post('http://127.0.0.1:8080/verify_email', data);
        return response.data;
    };

    static async resetPassword(data){
        const response = await axios.post('http://127.0.0.1:8080/reset_password', data);
        return response.data;
    };

    static async sendEmail(data){
        const response = await axios.post(
            'https://api.sendinblue.com/v3/smtp/email',
            data,
            {
                headers: {
                    'accept': 'application/json',
                    'api-key': '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',
                    'content-type': 'application/json'
                }
            }
        );
        return response.data;
    };
}