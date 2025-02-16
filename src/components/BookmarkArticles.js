import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { BookmarkArticlesContainer } from './styles/BookmarkArticlesStyle';
import ArticleService from "./services/article-service";
import CardsDisplayContainer from "./CardsDisplay";

const articleService = new ArticleService();

const BookmarkArticles = props => {
  const location = useLocation();
  const { element } = location.state || {};

  const [articles, setArticles] = useState([]);
  const [bookmarks, setBookmarks] = useState(element.articles);

  const updateArticles = () => { setBookmarks(bookmarks) };

  useEffect(() => {
    articleService.myArticles(props.loggedInUser._id)
      .then(response => {
        const newArr = []
        response.map((item) => {
          if (element.articles.includes(item._id)) {
            newArr.push(item);
          }
          return "";
        })
        setArticles(newArr);
      })
      .catch(error => console.log(error.message));
  }, [props.loggedInUser, element]);

  return (
    <BookmarkArticlesContainer>
      {
        articles.length > 0 ? (
          <div id="bookmark-articles-cards">
            <CardsDisplayContainer
              updateBookMarks={updateArticles}
              bookmarks={bookmarks}
              user={props.loggedInUser}
              getUser={props.getUser}
              allCards={articles} />
          </div>
        ) : (
          <div id="empty-articles">
            <h1>No articles to see</h1>
            <Link to="/new-article">Click here do start creating</Link>
            <img src={"./assets/Illustration 3.png"} alt="" />
          </div>
        )
      }
    </BookmarkArticlesContainer>
  )
}

export default BookmarkArticles;