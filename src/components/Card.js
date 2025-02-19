import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer, ModalContainer } from "./styles/CardStyle";
import ModalBookmarks from './ModalBookmarks';
import SocialIcons from './SocialIcons';
import ArticleService from "./services/article-service";

const articleService = new ArticleService();

const Card = (props) => {

  const [deleteModalState, setDeleteModal] = useState(false);
  const showDeleteModal = () => setDeleteModal(!deleteModalState);

  const [modalBookmark, setModalBookmark] = useState(false);
  const openModalBookmark = () => setModalBookmark(!modalBookmark);

  const dataStr = props.content.createdAt;
  const date = new Date(dataStr);

  const mounts = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

  const mount = mounts[date.getUTCMonth()];
  const day = String(date.getUTCDate()).padStart(2, '0');
  const year = date.getUTCFullYear();

  const newDate = `${mount}, ${day}-${year}`

  const content = { ...props.content, newDate }

  const deleteArticle = (e) => {
    e.preventDefault();
    articleService.deleteArticle(props.content._id)
      .then(response => {
        const newCards = props.cards
          .filter(element => element._id !== props.content._id);

        props.update(newCards);
      })
      .catch(error => console.log(error.message));
  }

  return (
    <>
      <CardContainer
        key={props.content.id}>
        <Link to={{ pathname: "/article", state: { content }, user: props.content.userId }}>
          <div id="profile-data">
            <img src={props.content.userId.imgPath} alt="Avatar" />

            <div id="profile-info">
              <p>{props.content.userId.username}</p>
              <p>{newDate}</p>
            </div>
          </div>

          <img
            src={
              props.content.article.cover.includes("picsum")
                ? (`${props.content.article.cover}`)
                : (`${props.content.article.cover}`)
            }
            alt="Card cover" />

          <h4>{props.content.article.title}</h4>

          <p>{props.content.article.description}</p>
        </Link>

        {props.user
          ? (
            <SocialIcons
              cards={props.cards}
              update={props.update}
              bookmarks={props.bookmarks}
              updateBookMarks={props.updateBookMarks}
              user={props.user}
              content={props.content}
              getUser={props.getUser}
              modalDelete={showDeleteModal}
              openModal={openModalBookmark}
            />
          )
          : ("")
        }
      </CardContainer>

      <ModalContainer open={deleteModalState}>
        <div id="modal">
          <h2>Are you sure you want to delete
            this article?</h2>

          <div id="buttons">
            <button id="cancel" onClick={showDeleteModal}>Cancel</button>
            <button onClick={deleteArticle} id="confirm">Confirm</button>
          </div>
        </div>
      </ModalContainer>

      <ModalBookmarks
        cards={props.cards}
        update={props.update}
        user={props.user}
        content={props.content}
        getUser={props.getUser}
        openModal={openModalBookmark}
        open={modalBookmark}
      />
    </>
  )
}

export default Card;