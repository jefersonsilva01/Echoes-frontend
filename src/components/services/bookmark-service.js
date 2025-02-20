import axios from 'axios';

class BookmarkService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      withCredentials: false
    });
    this.service = service;
  }

  bookmarks = (id) => {
    return this.service.get(`/api/bookmarks?id=${id}`)
      .then(response => response.data);
  }

  newBookmark = (id, name) => {
    return this.service.post(`/api/new-bookmark?id=${id}`, { name: name })
      .then(response => response.data);
  }

  updateBookmark = (id, update) => {
    return this.service.put(`/api/update-bookmark?id=${id}`, update)
      .then(response => response.data);
  }

  deleteBookmark = (id) => {
    return this.service.delete(`/api/bookmark/delete?id=${id}`)
      .then(response => response.data);
  }
}

export default BookmarkService;