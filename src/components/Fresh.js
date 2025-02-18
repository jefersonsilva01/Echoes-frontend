import React, { useEffect, useState } from "react";
import { FreshSection } from "./styles/CarrouselStyle";
import CardsDisplayContainer from "./CardsDisplay";
import ArticleService from "./services/article-service";

const articleService = new ArticleService();

const Carrousel = props => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    articleService.freshArticles()
      .then(response => setCards(response))
      .catch(err => console.log(err));
  }, []);

  return (
    <FreshSection id="fresh">
      <div id="container">
        <h2>Fresh</h2>
        <div id="carrousel-container">
          <CardsDisplayContainer
            user={props.user}
            getUser={props.getUser}
            allCards={cards}
            fresh={true}
          />
        </div>
      </div>
    </FreshSection>
  )
}

export default Carrousel;