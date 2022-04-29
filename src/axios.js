import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://unipapeando.herokuapp.com',
});

export default instance;
