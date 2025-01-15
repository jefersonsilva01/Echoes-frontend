import styled from "styled-components";

const SignInArea = styled.div`
  background-color: var(--BK-Main);
  height: 100vh;

  & > #signin-container {
    max-width: 1440px;
    width: fit-content;
    height: 80vh;
    margin: 0 auto;
    padding: 0 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      margin-bottom: 32px;
    }

    & > h1 {
      color: var(--WT-Main);
      font-size: 2.5em;
      margin-bottom: 16px;
    }

    & > p {
      color: var(--WT-Main);
      font-weight: 500;
      margin-bottom: 16px;

      & > a {
        text-decoration: none;
        color: var(--Action);
      }
    }

    & > button {
      background-color: var(--Action);
      border-style: none;
      border-radius: 4px;
      padding: 8px 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--WT-Main);
      font-size: 1em;
      font-weight: 600;
      transition: background-color 0.3s ease-in-out;
      margin-bottom: 16px;
      font-family: var(--Poppins);

      & > svg {
        margin-right: 16px;

        & > path {
          fill: var(--WT-Main);
        }
      }

      &:hover {
        background-color: var(--Action-Hover);
        cursor: pointer;
      }
    }

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--WT-Main-50);
      width: 100%;
      margin-bottom: 16px;

      & > div {
        background-color: var(--WT-Main-50);
        height: 2px;
        width: 45%;
      }
    }

    & > #error {
      justify-content: start;
    }

    & > #error > span {
      color: var(--Alert);
      margin-left: 16px;
    }

    & > #error > svg > path {
      fill: var(--Alert)
    }

    & > form > input {
      width: 100%;
      display: flex;
      margin-bottom: 16px;
      padding: 8px 16px;
      border-style: none;
      border-radius: 4px;
      font-family: var(--Poppins);
      font-weight: 400;
      font-size: 1em;

      &:focus{
        outline: 3px solid var(--Action);
      }
    }

    & > form > #signin {
      background-color: var(--BTN);
      color: var(--BK-Main);
      border-style: none;
      border-radius: 4px;
      padding: 8px 0;
      width: 100%;
      align-items: center;
      font-size: 1em;
      font-weight: 600;
      transition: background-color 0.3s ease-in-out;
      margin-bottom: 16px;
      font-family: var(--Poppins);

      &:hover {
        background-color: var(--BTN-Hover);
        box-shadow: var(--Shadow);
        cursor: pointer;
      }
    }
  }
`;

export { SignInArea };