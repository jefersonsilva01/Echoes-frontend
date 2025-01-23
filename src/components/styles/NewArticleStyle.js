import styled from "styled-components";

const NewArticleContainer = styled.section`
  height: 100%;
  min-height: 100vh;
  background-color: var(--WT-BG);
  position: relative;
  padding: 71px 16px 16px;

  & > form {
    display: flex;
    flex-direction: column;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
    padding: 48px 0 0;

    & > input, textarea, > .new-element > input  {
      max-width: 650px;
      margin: 8px 0;
      font-family: var(--Poppins);
      font-weight: 400;
      font-size: 1em;
      padding: 8px 16px;
      border: 2px solid var(--BK-Main-50);
      outline: none;
      border-radius: 4px;
      transition: all 0.3s ease-in-out;
      resize: none;
      width: 100%;

      &:focus {
        border: 2px solid var(--Action);
      }
    }

    & > label { 
      max-width: 650px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--BTN);
      padding:  ${props => props.image === "true" ? "0" : "64px"};
      opacity:  ${props => props.image === "true" ? "1" : "0.5"};
      border-radius: 4px;
      cursor: pointer;

      & > img {
        width: ${props => props.image === "true" ? "650px" : "48px"};
        height: ${props => props.image === "true" ? "178px" : "48px"};
        object-fit: cover;
        object-position: center;
        border-radius: 4px;
      }

      & > input[type="file"] {
        display: none;
      }

      &:hover {
        opacity: 1;
      }
    }

    & > .new-element {
      display: flex;
      align-items: start;

      & > svg {
        margin: 8px 0 0 8px;
        cursor: pointer;

        &:hover > path{
            fill: var(--Alert-Hover);
          }
      }
    }
  }

  #buttons {
    display: flex;
    justify-content: space-between;
    margin: 16px auto 0;
    max-width: 700px;
    align-self: start;
    width: 100%;

    & > #add {
      display: flex;
    }

    & > #add > button {
      display: flex;
      align-iterms: center;
      margin: 0 8px;
      padding: 8px 16px;
      border-radius: 16px;
      background-color: var(--BTN);
      border: none;

      color: var(--BK-Main);
      font-family: var(--Poppins);
      font-weight: 400;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: var(--BTN-Hover);
      }
    }

    & > button {
      padding: 8px 16px;
      border-radius: 4px;
      background-color: var(--Action);
      border: none;
      color: var(--WT-Main);
      font-family: var(--Poppins);
      font-weight: 400;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin-right: 50px;

      @media(max-width: 1040px) {
        margin-right: 50px;
      }

      @media(max-width: 620px) {
        margin-right: 0px;
      }

      &:hover {
        background-color: var(--Action-Hover);
      }
    }
  }
`;

export { NewArticleContainer };