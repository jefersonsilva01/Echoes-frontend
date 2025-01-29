import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { ArticleContainer } from "./styles/ArticleStyle";
import BtnGoToTop from './BtnGoToTop';

const Article = props => {
  const location = useLocation();
  const { content } = location.state || {};

  function getOrderedContent(article) {
    const result = [];

    // Extrair e ordenar as chaves
    const keys = Object.keys(article).filter(key => key.startsWith('paragraph') || key.startsWith('subtitle'));
    keys.sort((a, b) => {
      // Extrair o número no final de cada chave
      const numA = parseInt(a.match(/\d+$/)?.[0] || -1);
      const numB = parseInt(b.match(/\d+$/)?.[0] || -1);
      return numA - numB;
    });

    // Adicionar os valores ordenados ao resultado
    keys.forEach(key => {
      result.push({ type: key.startsWith('paragraph') ? 'paragraph' : 'subtitle', content: article[key] });
    });

    return result;
  }

  // Executar a função e exibir o resultado
  const orderedContent = getOrderedContent(content.article);

  return (
    <ArticleContainer>
      <div id="article">
        <p id="date">{content.newDate}</p>
        <h1 id="title">{content.article.title}</h1>
        <p id="description">{content.article.description}</p>

        <div id="info">
          <span>By: {content.article.username}</span>

          <div id="social-icons">
            <div id="heart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
              <span>{content.likes}</span>
            </div>
            <div id="bookmarks">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
              <span>{content.bookmarks}</span>
            </div>

          </div>
        </div>

        <img id="cover" src={content.article.cover.includes("picsum")
          ? (`${content.article.cover}/799/368`)
          : (content.article.cover)} alt="Cover" />

        <hr />

        {
          orderedContent.map((item, index) => (
            item.type === 'paragraph'
              ? (<p key={index} className="paragraph">{item.content}</p>)
              : (<h2 key={index} className="subtitle">{item.content}</h2>)
          ))
        }

      </div>
      <BtnGoToTop />
    </ArticleContainer>
  )
}

export default Article;