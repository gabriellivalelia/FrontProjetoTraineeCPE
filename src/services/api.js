import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:3001', 
    timeout: 10000, 
  });
  
  export default instance;