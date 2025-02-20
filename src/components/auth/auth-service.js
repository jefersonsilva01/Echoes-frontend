import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL,
      withCredentials: false
    });
    this.service = service;
  }

  signup = (username, email, password, confirmPassword) => {
    return this.service.post("/auth/signup", { username, email, password, confirmPassword })
      .then(response => response.data);
  }

  signin = (email, password) => {
    return this.service.post("/auth/signin", { email, password })
      .then(response => response.data);
  }

  google = () => {
    window.location.href = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
  };

  verify = () => {
    return this.service.get("/auth/verify")
      .then(response => response.data);
  }

  signout = () => {
    return this.service.get("/auth/signout", {})
      .then(response => response.data);
  }
}

export default AuthService;