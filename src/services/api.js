import axios from 'axios';

const api = axios.create({
 baseURL:'http://apituct.kinghost.net:21126/'
});

export default api;