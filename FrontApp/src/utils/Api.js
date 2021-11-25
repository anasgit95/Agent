import axios from 'axios';
export default axios.create({
  baseURL: `192.168.100.46:3005/`,

 
  headers: {
    'Content-Type': 'application/json ',
  }
});
