import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyArticlesContrainer } from './styles/MyArticlesStyle'
import Card from './Card';
import ArticleService from "./services/article-service";

const articleService = new ArticleService();

const MyArticles = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    articleService.myArticles(props.loggedInUser._id)
      .then(response => {
        setArticles(response)
      })
      .catch(error => console.log(error.message));
  }, [props.loggedInUser]);

  return (
    <MyArticlesContrainer>
      {
        articles ? (
          <div id="my-articles-cards">
            {
              articles.map((element, index) => (
                <Card
                  key={index}
                  content={element}
                  id={element._id}
                  edit={true}
                  user={props.loggedInUser} />
              ))
            }
          </div>
        ) : (
          <div id="empty-articles">
            <h1>No articles to see</h1>
            <Link to="/new-article">Click here do start creating</Link>
          </div>
        )
      }
    </MyArticlesContrainer>
  );
}

export default MyArticles;