import axios from 'axios';

export const authAPI = {
    me() {
        return axios.get('http://127.0.0.1:8000/auth/users/me',
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    },

    login(email, password) {
        return axios.post('http://127.0.0.1:8000/auth/token/login', {email: email, password: password})
    },

    logout() {
        return axios.post('http://127.0.0.1:8000/auth/token/logout',
        null,
        {headers: {Authorization: `Token ${localStorage.getItem('token')}`}})
    }
};


export const regUserAPI = {
    create(email, password) {
        return axios.post('http://127.0.0.1:8000/auth/users/',
        {email: email, password: password});
    }
};