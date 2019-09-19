import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 8e96c35e225239ff1c4fc92ff9f30c16c87938d08241168b0001f8dda917e100'
  }
});
