import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ArticleContainer } from "./styles/ArticleStyle";
import BtnGoToTop from './BtnGoToTop';
import Nav from "./Nav";

const Article = props => {
  const location = useLocation();
  const { content } = location.state || {};

  function getOrderedContent(article) {
    const result = [];

    // Extrair e ordenar as chaves
    const keys = Object.keys(article).filter(key => key.startsWith('new-paragraph') || key.startsWith('subtitle'));
    keys.sort((a, b) => {
      // Extrair o número no final de cada chave
      const numA = parseInt(a.match(/\d+$/)?.[0] || -1);
      const numB = parseInt(b.match(/\d+$/)?.[0] || -1);
      return numA - numB;
    });

    // Adicionar os valores ordenados ao resultado
    keys.forEach(key => {
      result.push({ type: key.startsWith('new-paragraph') ? 'new-paragraph' : 'subtitle', content: article[key] });
    });

    return result;
  }

  // Executar a função e exibir o resultado
  const orderedContent = getOrderedContent(content.article);

  return (
    <>
      {props.loggedInUser ? ("") : (<Nav />)}
      <ArticleContainer>
        <div id="article">
          <p id="date">{content.newDate}</p>
          <h1 id="title">{content.article.title}</h1>
          <p id="description">{content.article.description}</p>

          <div id="info">
            <span>By: {content.article.username}</span>

            <div id="social-icons">
              <div id="heart">
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5.12153L11.8635 4.99264C10.7014 3.85554 9.14236 3.21536 7.5165 3.20764C5.92264 3.20764 4.39391 3.84008 3.2659 4.96612C2.13789 6.09216 1.50278 7.61979 1.5 9.21364C1.5 12.4476 2.6865 13.9911 7.989 18.1806L10.7737 20.3421C11.4953 20.9022 12.5047 20.9022 13.2263 20.3421L16.011 18.1806C21.3135 13.9911 22.5 12.4476 22.5 9.21364C22.4972 7.61979 21.8621 6.09216 20.7341 4.96612C19.6061 3.84008 18.0773 3.20764 16.4835 3.20764C14.8576 3.21536 13.2986 3.85554 12.1365 4.99264L12 5.12153Z" fill="black" />
                </svg>
                <span>{content.likes}</span>
              </div>
              <div id="bookmarks">
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 2C4.89543 2 4 2.89543 4 4V21.1369C4 21.9067 4.83335 22.3878 5.50002 22.0029L12 18.25L18.5 22.0029C19.1667 22.3878 20 21.9067 20 21.1369V4C20 2.89543 19.1046 2 18 2H6Z" fill="black" />
                </svg>
                <span>{content.bookmarks}</span>
              </div>
            </div>
          </div>

          <img id="cover" src={content.article.cover.includes("picsum")
            ? (`${content.article.cover}`)
            : (content.article.cover)} alt="Cover" />

          <hr />

          <p className="paragraph">{content.article.paragraph}</p>

          {
            orderedContent.map((item, index) => (
              item.type === 'new-paragraph'
                ? (<p key={index} className="new-paragraph">{item.content}</p>)
                : (<h2 key={index} className="subtitle">{item.content}</h2>)
            ))
          }
        </div>
        <BtnGoToTop />
      </ArticleContainer>
    </>
  )
}

export default Article;