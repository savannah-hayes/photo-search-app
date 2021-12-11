import axios from 'axios'

const APP_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${APP_ACCESS_KEY}`
  }
});
