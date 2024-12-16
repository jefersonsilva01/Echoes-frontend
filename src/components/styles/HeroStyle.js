import styled from "styled-components";

const HeroSection = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: calc(100vh - 72px);
  background-color: var(--BK-Main);

  & > h1 {
    color: var(--WT-Main);
    font-size: 20em;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    border-bottom: solid 5px var(--WT-Main);

    @media(max-width: 1440px) {
      font-size: 23vw;
    };

    & + p {
      color: var(--WT-Main);
      font-size: 1em;
      font-weight: 500;
      max-width: fit-content;
      margin-top: 32px;
      margin-left: 4%;

      & + p {
        color: var(--WT-Main);
        font-size: 1em;
        font-weight: 500;
        max-width: fit-content;
        margin-top: 64px;
        margin-left: 4%;
      }
    };
  };

  & > #trend-news-card {
    display: flex;
    margin: 24px 4% 0;

    & > #trend-news-img {
      overflow: hidden;
      border-radius: 12px;
    };

    & > #trend-news-img > a {
      background-image: url("./assets/Trend-news-desktop.png");
      border-radius: 12px;
      display: block;
      width: 592px;
      height: 369px;
      transform: scale(1);
      transition: transform 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }

    & > #news-info {
      width: 592px;
    }
  }

`;

export { HeroSection }