import axios from 'axios';
export default axios.create({
  //  baseURL: `http://92.222.117.221:3005/`,

  baseURL: `http://10.0.2.2:3005/`,

  headers: {
    'Content-Type': 'application/json ',
  }
});
