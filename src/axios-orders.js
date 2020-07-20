import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-my-burger-c6a10.firebaseio.com/"
});

export default instance;