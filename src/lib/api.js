import ezFetch from 'ez-fetch';
const API_URL = 'http://localhost:3000/sneakers';

export default {
  getSneakers () {
    return ezFetch.get(API_URL);
  },
  getSneaker(id){
    return ezFetch.get(`${API_URL}/${id}`)
  }
}