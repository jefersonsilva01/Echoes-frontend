import React, { useEffect, useState } from "react";
import { ModalBookmarkContainer } from "./styles/ModalBookMarksStyel";
import UserService from "./services/user-service";
import ArticleService from "./services/article-service";
import BookmarkService from "./services/bookmark-service";

const bookmarkService = new BookmarkService();
const userService = new UserService();
const articleService = new ArticleService();

const ModalBookmarks = (props) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkOption, setBookmarkOption] = useState("");

  const { user } = props;

  const saveArticle = e => {
    e.preventDefault();

    bookmarkService.updateBookmark(bookmarkOption, { article: props.content._id, add: true })
      .then(response => response)
      .catch(error => console.log(error));

    articleService.updateArticle(props.content._id, { bookmark: true })
      .then(response => {
        props.cards.map((item, index) => {
          if (item._id === props.content._id) {
            props.cards[index].bookmarks += 1
            props.cards[index].userId.bookmarks.push(props.content._id)
          };
          return props.update(props.cards);
        })
      })
      .catch(error => console.log(error));

    userService.userUpdate(user._id, { bookmarks: props.content._id, add: true })
      .then(response => props.getUser(response))
      .catch(error => console.log(error));

    props.openModal();
  }

  const viewBookmarks = (user) => {
    bookmarkService.bookmarks(user?._id)
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
  }, [user]);

  return (
    <ModalBookmarkContainer open={props.open}>
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

          <button id="cancel" onClick={(e) => { e.preventDefault(); props.openModal() }}>Cancel</button>
          <button id="confirm" type="submit">Save</button>
        </form>
      </div>
    </ModalBookmarkContainer>
  )
}

export default ModalBookmarks;