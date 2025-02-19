import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import CardsDisplayContainer from "./CardsDisplay";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { SearchResultsStyles } from './styles/SearchResultsStyles';
import ArticleService from "./services/article-service";
const articleService = new ArticleService();


const SearchResults = props => {
  const location = useLocation();
  const { search } = location.state || {};

  const [cards, setCards] = useState([]);

  useEffect(() => {
    articleService.searchArticles(search)
      .then(response => setCards(response))
      .catch(err => console.log(err));
  }, [search])

  console.log(cards, props);

  return (
    <>
      {props.loggedInUser ? ("") : (<Nav />)}
      <SearchResultsStyles>
        <CardsDisplayContainer
          user={props.user}
          getUser={props.getUser}
          allCards={cards}
        >
        </CardsDisplayContainer>
      </SearchResultsStyles>
    </>
  )
}

export default SearchResults;