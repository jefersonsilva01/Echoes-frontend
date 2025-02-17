import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainCardContainer } from './styles/MainCardStyle'
import ArticleService from "./services/article-service";

const articleService = new ArticleService();

const MainCard = props => {

  const [mainArticle, setMainArticle] = useState(null);

  useEffect(() => {
    articleService.mainArticle()
      .then(response => setMainArticle(response))
      .catch(err => console.log(err));
  }, []);

  const dataStr = mainArticle?.createdAt;
  const date = new Date(dataStr);

  const mounts = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  const mount = mounts[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();

  const newDate = `${mount}, ${day}-${year}`

  const content = { ...mainArticle, newDate }

  return (
    <MainCardContainer image={mainArticle?.article.cover}>
      <div id="trend-news-img">
        <Link to={{ pathname: "/article", state: { content }, user: mainArticle?.userId }}></Link>
      </div>

      <div id="news-info">
        <div id="news-data">
          <span>By: {mainArticle?.article.username}</span>
          <span>{newDate}</span>
        </div>

        <h1>{mainArticle?.article.title}</h1>

        <p>{mainArticle?.article.description}</p>

        <Link to={{ pathname: "/article", state: { content }, user: mainArticle?.userId }}>
          <strong>Read more...</strong>
        </Link>
      </div>
    </MainCardContainer>
  )
}

export default MainCard;