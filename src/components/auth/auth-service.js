import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000',
      // baseURL: process.env.SERVER_URL,
      withCredentials: true
    });
    this.service = service;
  }

  singup = (username, email, password, confirmPassword) => {
    return this.service.post("/auth/signup", { username, email, password, confirmPassword })
      .then(response => response.data);
  }

  signin = (email, password) => {
    return this.service.post("/auth/signin", { email, password })
      .then(response => response.data);
  }

  verify = () => {
    return this.service.get("/auth/verify")
      .then(response => response.data);
  }

  signout = () => {
    return this.service.post("/auth/signout", {})
      .then(response => response.data);
  }
}

export default AuthService;