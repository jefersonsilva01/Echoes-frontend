import React from "react";
import { Link } from "react-router-dom";
import { CardContainer } from "./styles/CardStyle";

const Card = (props) => {
  return (
    <CardContainer id={props.id}>
      <Link>
        <div id="profile-data">
          <img src={props.user.imgPath} alt="Avatar" />

          <div id="profile-info">
            <p>{props.user.username}</p>
            <p>AGO, 20-2024</p>
          </div>
        </div>

        <img
          src={
            props.content.article.cover.includes("picsum")
              ? (`${props.content.article.cover}/342/208`)
              : (`${props.content.article.cover}`)
          }
          alt="Card cover" />

        <h4>{props.content.article.title}</h4>

        <p>{props.content.article.description}</p>
      </Link>

      <div id="social-icons">
        <div id="heart">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
          <span>{props.content.likes}</span>
        </div>
        <div id="bookmarks">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
          <span>{props.content.bookmarks}</span>
        </div>
      </div>
    </CardContainer>
  )
}

export default Card;