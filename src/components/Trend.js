import React, { useState, useEffect } from "react";
import { TrendSection } from "./styles/TrendStyle";
import CardsDisplayContainer from "./CardsDisplay";
import ArticleService from "./services/article-service";
const articleService = new ArticleService();

const Trend = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    articleService.allArticles()
      .then(response => setCards(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <TrendSection id="trend">
      <h2>Trends</h2>
      <CardsDisplayContainer
        user={props.user}
        getUser={props.getUser}
        allCards={cards} />
    </TrendSection>
  )
}

export default Trend;