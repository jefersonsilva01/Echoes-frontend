import React, { useEffect, useState } from "react";
import { ModalBookmarkContainer } from "./styles/ModalBookMarksStyel";
import BookmarkService from "./services/bookmark-service";
import UserService from "./services/user-service";
import ArticleService from "./services/article-service";

const bookmarkService = new BookmarkService();
const userService = new UserService();
const articleService = new ArticleService();

const ModalBookmarks = (props) => {
  const [modal, setModalStatus] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkOption, setBookmarkOption] = useState("")

  const { user } = props;

  const setModal = () => props.openModal();

  const saveArticle = e => {
    e.preventDefault();

    userService.userUpdate(user, { bookmarks: props.card, add: true })
      .then(response => response)
      .catch(error => console.log(error));

    articleService.updateArticle(props.card, { bookmark: true })
      .then(response => response)
      .catch(error => console.log(error));

    bookmarkService.updateBookmark(bookmarkOption, { article: props.card, add: true })
      .then(response => response)
      .catch(error => console.log(error));

    setModal();
    window.location.reload();
  }

  const viewBookmarks = (user) => {
    bookmarkService.bookmarks(user)
      .then(response => {
        setBookmarks(response)
      })
      .catch(error => console.log(error));
  }

  const handleChange = e => {
    const { value } = e.target;
    setBookmarkOption(value);
  }

  useEffect(() => {
    viewBookmarks(user);
    setModalStatus(props.open);

  }, [props.open, user]);

  return (
    <ModalBookmarkContainer open={modal}>
      <div id="modal-bookmarks">
        <form onSubmit={saveArticle}>
          {
            bookmarks.map((element, index) => (
              <label key={index}>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="bookmark"
                  value={element._id}
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