import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: var(--Active-Main);
  width: 100%;
  height: auto;
  padding: 64px;

  & > #footer-container {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;

    & > ul {
      list-style: none;
      margin: auto;
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      font-size: 1.5em;
      
      // Tablet
      @media (max-width: 1040px) {
        flex-direction: column;
      }

      & > li > a {
        text-decoration: none;
        color: var(--BK-Main);
        font-weight: 600;
      }

      & > li {
        position: relative;

        // Tablet
        @media (max-width: 1040px) {
          margin-bottom: 32px;
        }
      }

      & > li:first-child > a {
        position: absolute;
        left: 25%;
        top: 40%;
        
        // Tablet
        @media (max-width: 1040px) {
          position: static;
        }
      }
    }

    & #rotate {
      animation: spin 10s linear infinite reverse;

      // Tablet
      @media (max-width: 1040px) {
        display: none;
      }
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export { FooterSection };