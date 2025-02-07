import React, { useEffect, useState } from "react";
import { ModalBookmarkContainer } from "./styles/ModalBookMarksStyel";
import BookmarkService from "./services/bookmark-service";

const bookmarkService = new BookmarkService();

const ModalBookmarks = (props) => {
  const [modal, setModalStatus] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  const { user } = props;

  const setModal = () => props.openModal();

  const saveArticle = e => {
    e.preventDefault();
  }

  const viewBookmarks = (user) => {
    bookmarkService.bookmarks(user)
      .then(response => {
        setBookmarks(response)
      })
      .catch(error => console.log(error));
  }

  useEffect(() => {
    viewBookmarks(user);
    setModalStatus(props.open);

  }, [props.open, user]);

  console.log(bookmarks);

  return (
    <ModalBookmarkContainer open={modal}>
      <div id="modal-bookmarks">
        <form onSubmit={saveArticle}>
          {
            bookmarks.map((element, index) => (
              <label key={index} htmlFor={element.name}>
                <input
                  id={element._id}
                  type="radio"
                  name={element.name}
                  value={element.name}
                /> {element.name}
              </label>
            ))
          }

          <button id="cancel" onClick={(e) => { e.preventDefault(); setModal() }}>Cancel</button>
          <button id="confirm" type="submit">Save</button>
        </form>
      </div>
    </ModalBookmarkContainer>
  )
}

export default ModalBookmarks;