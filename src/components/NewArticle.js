import React, { useState } from "react";
import { ArticleContainer } from "./styles/ArticleStyle"

const NewArticle = props => {
  const [formElements, setFormElements] = useState([]);

  const handlePublish = (element) => {
    let newElement = "";

    if (element === "paragraph") {
      newElement = {
        type: "textarea",
        placeholder: "Paragraph",
        rows: 10,
        cols: 50
      }
    } else {
      newElement = {
        type: "input",
        placeholder: "Subtitle",
        rows: 1,
        cols: 50
      }
    }

    setFormElements(prevElements => [
      ...prevElements,
      newElement
    ]);
  };

  const deleteElement = (index) => {

    let newFormElements = [...formElements]
    newFormElements.splice(index, 1);
    setFormElements(newFormElements);
  }

  return (
    <ArticleContainer>
      <form encType="multipart/form-data" id="form-article">
        <input type="text" placeholder="Title" name="title" />

        <textarea type="text" placeholder="Description" rows="3" cols="50" maxLength="180" name="description" />

        <label htmlFor="image-cover">
          <img src="./assets/camera.svg" alt="Cover" />

          <input type="file" id="image-cover" name="cover" />
        </label>

        <textarea type="text" placeholder="Paragraph" rows="10" cols="50" name="paragraph" />

        {
          formElements.map((element, index) => (
            element.type === "input" ? (
              <div className={`new-element-${index}  new-element`}>
                <input
                  type="text"
                  placeholder="Subtitle"
                  name={`subtitle-${index}`} />

                <svg onClick={() => deleteElement(index)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 9.99998C10.5523 9.99998 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 9.99998 10 9.99998Z" fill="black" />
                  <path d="M14 9.99998C14.5523 9.99998 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 9.99998 14 9.99998Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 0.999977C7.89543 0.999977 7 1.89541 7 2.99998V4.99998H3C2.44772 4.99998 2 5.44769 2 5.99998C2 6.55226 2.44772 6.99998 3 6.99998H4.11765L4.88926 20.1174C4.95145 21.1746 5.82686 22 6.88581 22H17.1142C18.1731 22 19.0486 21.1746 19.1107 20.1174L19.8824 6.99998H21C21.5523 6.99998 22 6.55226 22 5.99998C22 5.44769 21.5523 4.99998 21 4.99998H17V2.99998C17 1.89541 16.1046 0.999977 15 0.999977H9ZM6.12111 6.99998L6.88581 20H17.1142L17.8789 6.99998H6.12111ZM9 2.99998H15V4.99998H9V2.99998Z" fill="black" />
                </svg>
              </div>
            ) : (
              <div className={`new-element-${index}  new-element`}>
                <textarea
                  type="text"
                  placeholder="Paragraph"
                  rows="10"
                  cols="50"
                  name={index === 0 ? `paragraph-${index + 1}` : `paragraph-${index}`} />

                <svg onClick={() => deleteElement(index)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 9.99998C10.5523 9.99998 11 10.4477 11 11V16C11 16.5523 10.5523 17 10 17C9.44772 17 9 16.5523 9 16V11C9 10.4477 9.44772 9.99998 10 9.99998Z" fill="black" />
                  <path d="M14 9.99998C14.5523 9.99998 15 10.4477 15 11V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16V11C13 10.4477 13.4477 9.99998 14 9.99998Z" fill="black" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 0.999977C7.89543 0.999977 7 1.89541 7 2.99998V4.99998H3C2.44772 4.99998 2 5.44769 2 5.99998C2 6.55226 2.44772 6.99998 3 6.99998H4.11765L4.88926 20.1174C4.95145 21.1746 5.82686 22 6.88581 22H17.1142C18.1731 22 19.0486 21.1746 19.1107 20.1174L19.8824 6.99998H21C21.5523 6.99998 22 6.55226 22 5.99998C22 5.44769 21.5523 4.99998 21 4.99998H17V2.99998C17 1.89541 16.1046 0.999977 15 0.999977H9ZM6.12111 6.99998L6.88581 20H17.1142L17.8789 6.99998H6.12111ZM9 2.99998H15V4.99998H9V2.99998Z" fill="black" />
                </svg>
              </div>
            )
          ))
        }
      </form>

      <div id="buttons">
        <div id="add">
          <button onClick={() => handlePublish("paragraph")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 6V21H10V16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4H20V6H17V21H15V6H12ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14V6Z"></path></svg>
            Paragraph
          </button>

          <button onClick={() => handlePublish("subtitle")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M13 6V21H11V6H5V4H19V6H13Z"></path></svg>
            Subtitle
          </button>
        </div>

        <button type="submit" form="form-article">Publish</button>
      </div>

    </ArticleContainer>
  )
}

export default NewArticle;