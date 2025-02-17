import axios from 'axios';

class ArticleService {
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

  myArticles = (id) => {
    return this.service.get(`/api/my-articles?id=${id}`)
      .then(response => response.data);
  }

  allArticles = () => {
    return this.service.get("/api/all-articles")
      .then(response => response.data);
  }

  mainArticle = () => {
    return this.service.get("/api/main-article")
      .then(response => response.data);
  }

  uploadImage = (image) => {
    return this.service.post('/api/upload', image)
      .then(response => response.data);
  }

  updateArticle = (id, article) => {
    return this.service.put(`/api/update-article?id=${id}`, article)
      .then(response => response.data);
  }

  deleteArticle = (id) => {
    return this.service.delete(`/api/article/delete?id=${id}`)
      .then(response => response.data);
  }
}

export default ArticleService;