import styled from "styled-components";

const MainCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 24px auto 0;
  padding: 0 32px;

  // Tablet
  @media(max-width: 1040px) {
    flex-direction: column;
  }

  // Mobile
  @media(max-width: 620px) {
    flex-direction: column;
  }

  & > #trend-news-img {
    overflow: hidden;
    border-radius: 12px;
    margin-right: 32px;

    // Tablet
    @media(max-width: 1040px) {
      width: 100%;
      margin-right: 0px;
    };

    // Mobile
    @media(max-width: 620px) {
      width: 100%;
      margin-right: 0px;
    };
  };

  & > #trend-news-img > a {
    background-image: ${props => props.image ? `url(${props.image})` : "none"};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 592px;
    height: 369px;
    border-radius: 12px;
    display: block;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    // Tablet
    @media(max-width: 1040px) {
      background-image: ${props => props.image ? `url(${props.image})` : "none"};
      background-size: cover;
      width: 100%;
      height: 230px;
    };

    // Mobile
    @media(max-width: 620px) {
      background-image: ${props => props.image ? `url(${props.image})` : "none"};
      background-size: cover;
      width: 100%;
      height: 216px;
    };
  };

  & > #news-info {
    margin-top: 8px;
    width: 50%;

    & > a {
      display: block;
      margin-bottom: 24px;
    }

    // Tablet
    @media(max-width: 1040px) {
      margin-top: 16px;
      width: 100%;
    };

    // Mobile
    @media(max-width: 620px) {
      margin-top: 16px;
      width: 100%;
    };

    & > #news-data {
      display: flex;
      justify-content: space-between;
      color: var(--WT-Main-50);
      margin-bottom: 24px;
      font-weight: 500;

      // Tablet
      @media(max-width: 1040px) {
        font-size: 16px;
        margin-bottom: 16px;
      }

      // Mobile
      @media(max-width: 620px) {
        font-size: 16px;
      };
    };

    & > h1 {
      color: var(--WT-Main);
      font-size: 2em;
      margin-bottom: 16px;

      // Tablet
      @media(max-width: 1040px) {
        font-size: 20px;
        margin-bottom: 8px;
      }

      // Mobile
      @media(max-width: 620px) {
        font-size: 1.5rem;
        margin-bottom: 16px;
      };
    };

    & > p {
      color: var(--WT-Main-50);
      width: 100%;
      font-size: 1.25em;
      margin-bottom: 16px;

      // Tablet
      @media(max-width: 1040px) {
        font-size: 16px;
        margin-bottom: 16px;
      }

      // Mobile
      @media(max-width: 620px) {
        font-size: 14px;
      };
    };

    & > a {
      text-decoration: none;
      color: var(--WT-Main);
      font-size: 1em;

      // Tablet
      @media(max-width: 1040px) {
        font-size: 16px;
        margin-bottom: 18px;
      }

      // Mobile
      @media(max-width: 620px) {
        font-size: 14px;
      };
    }
  };
`;

export { MainCardContainer }