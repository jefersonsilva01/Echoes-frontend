import React, { useEffect, useState } from "react";
import { CardsDisplayStyle } from './styles/CardsDisplayStyle';
import Card from "./Card";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos padrão do Swiper

const CardsDisplayContainer = props => {
  const [cards, setCards] = useState([]);

  useEffect(() => { (props.allCards) && setCards(props.allCards) }, [props])

  const updateCards = newCard => { setCards(newCard) }
  return (
    <CardsDisplayStyle>
      {props.fresh
        ? (
          <Swiper
            spaceBetween={10} // Distância entre os slides
            slidesPerView={3} // Exibe 3 slides por vez (33% cada)
            loop={true} // Loop infinito
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-play
          >
            <div id="cards" className="cards-carrousel">
              {
                cards.map((element, index) => (
                  <SwiperSlide key={index}>
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
                  </SwiperSlide>
                ))
              }
            </div>
          </Swiper>)
        : (<div id="cards">
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
        </div>)
      }
    </CardsDisplayStyle>
  )
}

export default CardsDisplayContainer;