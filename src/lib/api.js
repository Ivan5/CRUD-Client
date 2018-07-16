import ezFetch from 'ez-fetch';
const API_URL = 'http://localhost:3000/sneakers';

export default {
  getSneakers () {
    return ezFetch.get(API_URL);
  },
  getSneaker(id){
    return ezFetch.get(`${API_URL}/${id}`)
  },
  createSneaker(sneaker){
    return ezFetch.post(API_URL,sneaker)
  },

  updateSneaker(id, sneaker){
    return ezFetch.put(`${API_URL}/${id}`,sneaker)

  },
  deleteSneaker(id){
    return ezFetch.delete(`${API_URL}/${id}`)

  }
}