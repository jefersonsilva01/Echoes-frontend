import React, { useEffect, useState } from "react";
import { CardsDisplayStyle } from './styles/CardsDisplayStyle';

import Card from "./Card";

const CardsDisplayContainer = props => {
  const [cards, setCards] = useState([]);

  useEffect(() => { (props.allCards) && setCards(props.allCards) }, [props])

  const updateCards = newCard => { setCards(newCard) }

  return (
    <CardsDisplayStyle>
      <div id="cards">
        {
          cards.map((element, index) => (
            <Card
              cards={cards}
              update={updateCards}
              updateBookMarks={props.updateBookMarks}
              bookmarks={props.bookmarks}
              user={props.user}
              getUser={props.getUser}
              key={index}
              content={element}
            />
          ))
        }
      </div>
    </CardsDisplayStyle>
  )
}

export default CardsDisplayContainer;