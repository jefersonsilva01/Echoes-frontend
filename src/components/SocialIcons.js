import React from "react";
import { Link } from "react-router-dom";
import { SocialIconsContainer } from './styles/SocialIconsStyle';
import UserService from "./services/user-service";
import ArticleService from "./services/article-service";
import BookmarkService from "./services/bookmark-service";

const bookmarkService = new BookmarkService();
const articleService = new ArticleService();
const userService = new UserService();

const SocialIcons = (props) => {

  const { content } = props;

  const likeArticle = (articleId, userId) => {
    articleService.updateArticle(articleId, { like: "add" })
      .then(response => {
        props.cards.map((item, index) => {
          if (item._id === articleId) {
            props.cards[index].likes += 1
            props.cards[index].userId.likes.push(articleId);
          };
          return props.update(props.cards)
        })
      })
      .catch(error => console.log(error));

    userService.userUpdate(userId, { addLike: articleId })
      .then(response => props.getUser(response))
      .catch(error => console.log(error));
  }

  const unlikeArticle = (articleId, userId) => {
    articleService.updateArticle(articleId, { like: "remove" })
      .then(response => {
        props.cards.map((item, index) => {
          if (item._id === articleId) {
            props.cards[index].likes -= 1
            props.cards[index].userId.likes.splice(index, 1)
          };
          return props.update(props.cards);
        })
      })
      .catch(error => console.log(error));

    userService.userUpdate(userId, { removeLike: articleId })
      .then(response => props.getUser(response))
      .catch(error => console.log(error));
  }

  const unBookmark = () => {
    bookmarkService.updateBookmark("", { article: props.content._id, remove: true })
      .then(response => response)
      .catch(error => console.log(error));

    articleService.updateArticle(props.content._id, { unBookmark: true })
      .then(response => {
        props.cards.map((item, index) => {
          if (item._id === props.content._id) {
            props.cards[index].bookmarks -= 1;
            props.cards[index].userId.bookmarks.splice(index, 1)
            props.update(props.cards)
            props.updateBookMarks(props.bookmarks.splice(index, 1))
          }
          return "";
        })
      })
      .catch(error => console.log(error));

    userService.userUpdate(props.user._id, { bookmarks: props.content._id, remove: true })
      .then(response => props.getUser(response))
      .catch(error => console.log(error));
  }

  return (
    <SocialIconsContainer
      like={content.userId.likes.includes(content._id, 0).toString()}
      bookmark={content.userId.bookmarks.includes(content._id, 0).toString()}
    >
      <div id="heart">
        {
          content.userId.likes.includes(content._id, 0)
            ? (
              <svg
                onClick={() => { unlikeArticle(content._id, content.userId._id) }}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5.12153L11.8635 4.99264C10.7014 3.85554 9.14236 3.21536 7.5165 3.20764C5.92264 3.20764 4.39391 3.84008 3.2659 4.96612C2.13789 6.09216 1.50278 7.61979 1.5 9.21364C1.5 12.4476 2.6865 13.9911 7.989 18.1806L10.7737 20.3421C11.4953 20.9022 12.5047 20.9022 13.2263 20.3421L16.011 18.1806C21.3135 13.9911 22.5 12.4476 22.5 9.21364C22.4972 7.61979 21.8621 6.09216 20.7341 4.96612C19.6061 3.84008 18.0773 3.20764 16.4835 3.20764C14.8576 3.21536 13.2986 3.85554 12.1365 4.99264L12 5.12153Z" fill="black" />
              </svg>
            )
            : (
              <svg
                onClick={
                  props.user
                    ? () => likeArticle(content._id, content.userId._id)
                    : undefined
                }
                style={props.user ? {} : { pointerEvents: "none", opacity: 0.5 }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
            )
        }
        <span>{content.likes}</span>
      </div>
      <div id="bookmarks">
        {
          content.userId.bookmarks.includes(content._id, 0)
            ? (
              <svg
                onClick={unBookmark}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2C4.89543 2 4 2.89543 4 4V21.1369C4 21.9067 4.83335 22.3878 5.50002 22.0029L12 18.25L18.5 22.0029C19.1667 22.3878 20 21.9067 20 21.1369V4C20 2.89543 19.1046 2 18 2H6Z" fill="black" />
              </svg>
            )
            : (
              <svg
                onClick={
                  props.user
                    ? () => props.openModal()
                    : undefined
                }
                style={props.user ? {} : { pointerEvents: "none", opacity: 0.5 }}
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18.5 22.0029L12 18.25L5.50002 22.0029C4.83335 22.3878 4 21.9067 4 21.1369V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.1369C20 21.9067 19.1667 22.3878 18.5 22.0029ZM13 16.518C12.3812 16.1607 11.6188 16.1607 11 16.518L6 19.4048V4H18V19.4048L13 16.518Z" fill="black" />
              </svg>
            )
        }
        <span>{content.bookmarks}</span>
      </div>

      {
        props?.user && props.user._Id === content.userId._Id ? (
          <div id="edit-icons">
            <svg
              onClick={() => { props.modalDelete() }}
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9.99998C10.5523 9.99998 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 9.99998 10 9.99998Z" fill="black" />
              <path d="M14 9.99998C14.5523 9.99998 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 9.99998 14 9.99998Z" fill="black" />
              <path fillRule="evenodd" clipRule="evenodd" d="M9 0.999977C7.89543 0.999977 7 1.89541 7 2.99998V4.99998H3C2.44772 4.99998 2 5.44769 2 5.99998C2 6.55226 2.44772 6.99998 3 6.99998H4.11765L4.88926 20.1174C4.95145 21.1746 5.82686 22 6.88581 22H17.1142C18.1731 22 19.0486 21.1746 19.1107 20.1174L19.8824 6.99998H21C21.5523 6.99998 22 6.55226 22 5.99998C22 5.44769 21.5523 4.99998 21 4.99998H17V2.99998C17 1.89541 16.1046 0.999977 15 0.999977H9ZM6.12111 6.99998L6.88581 20H17.1142L17.8789 6.99998H6.12111ZM9 2.99998H15V4.99998H9V2.99998Z" fill="black" />
            </svg>

            <Link
              to={{ pathname: "/edit-article", state: { content } }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.58579 11.9142C7.21071 12.2892 7 12.7979 7 13.3284V16C7 16.5522 7.44772 17 8 17H10.6716C11.202 17 11.7107 16.7892 12.0858 16.4142L21.5858 6.91416C22.3668 6.13311 22.3668 4.86678 21.5858 4.08573L19.9142 2.41416C19.1332 1.63311 17.8668 1.63311 17.0858 2.41416L7.58579 11.9142ZM10.6716 15H9L9 13.3284L18.5 3.82837L20.1716 5.49995L10.6716 15Z" fill="black" />
                <path d="M10 3.99994C10 4.55223 9.55229 4.99995 9 4.99995H4L4 20H19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V20C21 21.1045 20.1046 22 19 22H4C2.89543 22 2 21.1045 2 20V4.99995C2 3.89538 2.89543 2.99994 4 2.99994H9C9.55229 2.99994 10 3.44766 10 3.99994Z" fill="black" />
              </svg>
            </Link>
          </div>
        ) : ("")
      }
    </SocialIconsContainer >
  )
}

export default SocialIcons;