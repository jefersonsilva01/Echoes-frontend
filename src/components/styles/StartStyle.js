import styled from "styled-components";

const StartSection = styled.div`
  width: 100%;
  height: auto;
  background: var(--BK-Tertiary);

  & > #start-container {
    padding: 32px 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1440px;
    width: 100%;
    height: fit-content;
    margin: 0 auto;

    & > img[alt="Spaceman"] {
      width: 25%;
    }

    & > img[alt="Writer"] {
      width: 30%;
    }

    @media (max-width: 620px) {
      & > img {
        display: none;
      }
    }

    & > #call-to-action {
      text-align: center;

      & > h1 {
        color: var(--WT-Main);
        font-size: 2em;
        margin-bottom: 24px;
      }

      & > a {
        text-decoration: none;
        background-color: var(--WT-Main);
        color: var(--BK-Main);
        font-size: 1em;
        font-weight: 500;
        padding: 8px 16px;
        border-radius: 4px;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          box-shadow: var(--Shadow);
          background-image: var(--Active-Main-Action);
        }
      }
    }
  }
`;

export { StartSection };