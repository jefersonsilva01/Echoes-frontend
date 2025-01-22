import axios from 'axios';

class UserService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      withCredentials: true
    });
    this.service = service;
  }

  newArticle = (id, article) => {
    return this.service.post(`/api/new-article?id=${id}`, article)
      .then(response => response.data);
  }

  uploadImage = (image) => {
    return this.service.post('/api/upload', image)
      .then(response => response.data);
  }
}

export default UserService;