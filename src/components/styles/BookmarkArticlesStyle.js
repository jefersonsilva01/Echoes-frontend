import styled from "styled-components";

const BookmarkArticlesContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 71px);
  background-color: var(--WT-BG);
  position: relative;
  top: 71px;
  padding: 40px 16px;

  & > #bookmark-articles-cards {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    justify-content: center;
    width: 98.8%;
    margin: 0 auto;

    & > div {
      margin: 0 16px;
    }
  }

  & > #empty-articles {
    width: 100%;
    height: calc(100% - 71px);
    padding: 16px;
    text-align: center;

    & > h1 {
      font-size: 3.5rem;
      margin-bottom: 32px;
      color: var(--BK-Main);
    }

    & > a {
      text-decoration: none;
      font-size: 1.5em;
      color: var(--Action);
    }

    & > img {
      width: 50%;
      display: block;
      margin: 0 auto;
    }
  }
`;

export { BookmarkArticlesContainer };