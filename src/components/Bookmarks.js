import React, { useEffect, useState } from "react";
import { BookmarksContainer, ModalContainer } from "./styles/BookmarksStyle"
import BookMarkService from "./services/bookmark-service";

const bookMarkService = new BookMarkService();

const Bookmarks = props => {
  const [bookmark, setBookmark] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);

  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setUpdateModal] = useState(
    {
      status: false,
      name: "",
      id: null
    }
  );

  const [modalDelete, setDeleteModal] = useState(
    {
      status: false,
      id: null
    }
  );

  const userId = props.loggedInUser._id;

  const setModal = () => { setModalCreate(!modalCreate) };

  const deleteModal = (id = null) => {
    setDeleteModal({ status: !modalDelete.status, id })
  };

  const updateModal = (name = "", id = null) => {
    setUpdateModal({ status: !modalUpdate.status, name, id })
  }

  const handleChange = e => {
    e.preventDefault();

    const { value } = e.target;

    setBookmark(value);
  }

  const createBookmark = e => {
    e.preventDefault();

    bookMarkService.newBookmark(props.loggedInUser._id, bookmark)
      .then(response => {
        setBookmarks(prevElements => [...prevElements, response])
        setBookmark(null);
        setModal();
      })
      .catch(error => console.log(error.message));
  }

  const updateBookmar = e => {
    e.preventDefault();

    bookMarkService.updateBookmark(modalUpdate.id, bookmark)
      .then(response => {
        viewBookmarks(userId);
        updateModal();
      })
  }

  const deleteBookmark = e => {
    e.preventDefault();

    bookMarkService.deleteBookmark(modalDelete.id)
      .then(response => {
        viewBookmarks(userId);
        deleteModal();
      })
  }

  const viewBookmarks = (userId) => {
    bookMarkService.bookmarks(userId)
      .then(response => {
        setBookmarks(response)
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    viewBookmarks(userId)
  }, [userId]);

  return (
    <>
      <BookmarksContainer>
        <button id="new-bookmark" onClick={setModal}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0019 15.5C11.0019 16.0523 11.4496 16.5 12.0019 16.5C12.5541 16.5 13.0019 16.0523 13.0019 15.5V13H15.5019C16.0541 13 16.5019 12.5523 16.5019 12C16.5019 11.4477 16.0541 11 15.5019 11H13.0019V8.5C13.0019 7.94772 12.5541 7.5 12.0019 7.5C11.4496 7.5 11.0019 7.94772 11.0019 8.5V11H8.50186C7.94957 11 7.50186 11.4477 7.50186 12C7.50186 12.5523 7.94957 13 8.50186 13H11.0019V15.5Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.00195 3C4.79281 3 3.00195 4.79086 3.00195 7V17C3.00195 19.2091 4.79281 21 7.00195 21H17.002C19.2111 21 21.002 19.2091 21.002 17V7C21.002 4.79086 19.2111 3 17.002 3H7.00195ZM19.002 7C19.002 5.89543 18.1065 5 17.002 5H7.00195C5.89738 5 5.00195 5.89543 5.00195 7V17C5.00195 18.1046 5.89738 19 7.00195 19H17.002C18.1065 19 19.002 18.1046 19.002 17V7Z" fill="black" />
          </svg>
        </button>

        <div className="bookmark">
          <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5.99997C21.1045 5.99997 22 6.8954 22 7.99997V18C22 19.1045 21.1045 20 20 20H3.99995C2.89538 20 1.99995 19.1045 1.99995 18V5.99997C1.99995 4.8954 2.89538 3.99997 3.99995 3.99997H9.17152C9.70196 3.99997 10.2107 4.21068 10.5857 4.58576L12 5.99997H20Z" fill="black" />
          </svg>

          <p>All</p>
        </div>

        {
          (bookmarks?.length > 0)
            ? (
              bookmarks.map((element, index) => (
                <div key={index} className="bookmark">
                  <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 5.99997C21.1045 5.99997 22 6.8954 22 7.99997V18C22 19.1045 21.1045 20 20 20H3.99995C2.89538 20 1.99995 19.1045 1.99995 18V5.99997C1.99995 4.8954 2.89538 3.99997 3.99995 3.99997H9.17152C9.70196 3.99997 10.2107 4.21068 10.5857 4.58576L12 5.99997H20Z" fill="black" />
                  </svg>

                  <p>{element.name}</p>
                  <div id="edit-icons">
                    <svg onClick={(e) => { e.preventDefault(); deleteModal(element._id) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 9.99998C10.5523 9.99998 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 9.99998 10 9.99998Z" fill="black" />
                      <path d="M14 9.99998C14.5523 9.99998 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 9.99998 14 9.99998Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M9 0.999977C7.89543 0.999977 7 1.89541 7 2.99998V4.99998H3C2.44772 4.99998 2 5.44769 2 5.99998C2 6.55226 2.44772 6.99998 3 6.99998H4.11765L4.88926 20.1174C4.95145 21.1746 5.82686 22 6.88581 22H17.1142C18.1731 22 19.0486 21.1746 19.1107 20.1174L19.8824 6.99998H21C21.5523 6.99998 22 6.55226 22 5.99998C22 5.44769 21.5523 4.99998 21 4.99998H17V2.99998C17 1.89541 16.1046 0.999977 15 0.999977H9ZM6.12111 6.99998L6.88581 20H17.1142L17.8789 6.99998H6.12111ZM9 2.99998H15V4.99998H9V2.99998Z" fill="black" />
                    </svg>

                    <svg onClick={(e) => { e.preventDefault(); updateModal(element.name, element._id) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.58579 11.9142C7.21071 12.2892 7 12.7979 7 13.3284V16C7 16.5522 7.44772 17 8 17H10.6716C11.202 17 11.7107 16.7892 12.0858 16.4142L21.5858 6.91416C22.3668 6.13311 22.3668 4.86678 21.5858 4.08573L19.9142 2.41416C19.1332 1.63311 17.8668 1.63311 17.0858 2.41416L7.58579 11.9142ZM10.6716 15H9L9 13.3284L18.5 3.82837L20.1716 5.49995L10.6716 15Z" fill="black" />
                      <path d="M10 3.99994C10 4.55223 9.55229 4.99995 9 4.99995H4L4 20H19V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V20C21 21.1045 20.1046 22 19 22H4C2.89543 22 2 21.1045 2 20V4.99995C2 3.89538 2.89543 2.99994 4 2.99994H9C9.55229 2.99994 10 3.44766 10 3.99994Z" fill="black" />
                    </svg>
                  </div>
                </div>

              ))
            )
            : ("")
        }
      </BookmarksContainer>

      <ModalContainer open={modalCreate}>
        <div id="modal">
          <form onSubmit={createBookmark}>
            <input
              onChange={handleChange}
              value={bookmark ? bookmark : ""}
              name="name"
              type="text"
              maxLength={15}
              size={15} />

            <div id="buttons">
              <button
                id="cancel"
                onClick={(e) => { e.preventDefault(); setModal(); }}>
                Cancel
              </button>

              <button
                type="submit" id="confirm">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </ModalContainer>

      <ModalContainer open={modalUpdate.status}>
        <div id="modal">
          <form onSubmit={updateBookmar}>
            <input
              onChange={handleChange}
              value={bookmark ? bookmark : modalUpdate.name}
              name="name"
              type="text"
              maxLength={15}
              size={15} />

            <div id="buttons">
              <button
                id="cancel"
                onClick={(e) => { e.preventDefault(); updateModal(); }}>
                Cancel
              </button>

              <button
                type="submit" id="confirm">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </ModalContainer>

      <ModalContainer open={modalDelete.status}>
        <div id="modal">

          <h2>Are you sure you want to delete
            your bookmark?</h2>

          <div id="buttons">
            <button
              id="cancel"
              onClick={(e) => { e.preventDefault(); deleteModal() }}>
              Cancel
            </button>

            <button
              id="confirm"
              onClick={deleteBookmark}>
              Confirm
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  )
}

export default Bookmarks;