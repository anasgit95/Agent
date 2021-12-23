import axios from 'axios';
export default axios.create({
  // baseURL: `http://localhost:3005/`,

  baseURL:"http://92.222.117.221:3005/",
  headers: {
    'Content-Type': 'application/json ',
  }
});
