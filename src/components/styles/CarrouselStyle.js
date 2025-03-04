import styled from "styled-components";

const FreshSection = styled.section`
  width: 100%;
  background-color: var(--BK-Main);

  & > #container {
    background-color: var(--BK-Secundary);
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 0 32px ;
    overflow: hidden;
    position: relative;
    height: auto;

    &::before,
    &::after {
      z-index: 1;
      content: '';
      position: absolute;
      width: 2vw;
      height: 100%;
    };

    &::before {
      top: 0;
      left: 0;
      background: linear-gradient(to left, rgba(80, 82, 87, 0), rgba(32, 32, 32, 100));
    }

    &::after {
      top: 0;
      right: 0;
      background: linear-gradient(to right, rgba(80, 82, 87, 0), rgba(32, 32, 32, 100));
    }

    & > h2 {
      color: var(--WT-Main);
      border-bottom: 3px solid var(--WT-Main-50);
      padding: 0 0 16px;
      max-width: 1200px;
      width: 95%;
      margin: 0 auto;
      z-index: 2;
      position: relative;
    };

    & > #carrousel-container {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin: 32px auto 0;
      position: relative;
      left: 0;
      height: auto;

      // Tablet
      @media (max-width: 1040px) {
        width: fit-content;
      }

      // Mobile
      @media (max-width: 620px) {
        width: 100%;
      }

      & > div {
        margin: 0 16px;

        & > img {
          width: 100%;
        }

        // Tablet
        @media (max-width: 1040px) {
          width: 350px;
        }

        // Mobile
        @media (max-width: 620px) {
          width: 300px;
          margin: 0 8px;
        }
      }
    }
  }
`;

export { FreshSection };