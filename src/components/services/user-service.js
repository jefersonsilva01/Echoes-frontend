import axios from 'axios';

class UserService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      withCredentials: false
    });
    this.service = service;
  }

  userUpdate = (id, update) => {
    return this.service.put(`/api/user?id=${id}`, update)
      .then(response => response.data);
  }

  // userBookmark = (id, update) => {
  //   return this.service.put(`/api/user/bookmark?id=${id}`, update)
  //     .then(response => response.data);
  // }

  uploadImage = (image) => {
    return this.service.post('/api/upload', image)
      .then(response => response.data);
  }

  deleteUser = (id) => {
    return this.service.delete(`/api/user/delete?id=${id}`)
      .then(response => response.data);
  }
}

export default UserService;