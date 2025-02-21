import styled from "styled-components";

const BookmarksContainer = styled.section`
  background-color: var(--WT-Main);
  width: 100vw;
  height: fit-content;
  position: relative;
  top: 71px;
  padding: 16px 64px;



  & > #container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;

    @media(max-width: 1040px){
      justify-content: center;
    }
    
    & > a {
      text-decoration: none;
      color: var(--BK-Main);
    }

    & > a .bookmark, .bookmark {
      cursor: pointer;    
      border-radius: 8px;
      padding: 8px;
      margin: 0 4px 16px;
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      transition: all 0.3s ease-in-out;
      position: relative;

      & > .new {
        fill: var(--BTN);
        position: absolute;
        z-index: 3;
        
        & > path {
          fill: var(--Action);
        }
      }

      & > .folder > path {
        fill: var(--BTN);
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        & > .folder > path{
          fill: var(--BTN-Hover);
        }
      }

      & > p {
        width: 100%;
        font-size: 1em;
        font-weight: 500;
        text-align: center;
        word-wrap: break-word;
        overflow-wrap: break-word;
        text-overflow: ellipsis;  
      }

      & > #edit-icons {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
          margin: 0 8px;

          & > path {
            transition: all 0.3s ease-in-out;
          }

          &:nth-child(1):hover > path {
            fill: var(--Alert);
          }

          &:nth-child(2):hover > path {
            fill: var(--Action);
          }
        }
      }
    }
  }
`
const ModalContainer = styled.div`
  background-color: var(--BK-Main-50);
  width: 100%;
  height: calc(100vh - 71px);
  position: fixed;
  top: 71px;
  left: 0;
  bottom: 0;
  z-index: 2;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? '1' : '0'};
  transition: opacity 0.1s ease-in-out;

  & > #modal  {
    background-color: var(--WT-Main);
    width: fit-content;
    border-radius: 8px;
    padding: 64px 32px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    top: 25%;
    margin: 0 auto;
    height: ${props => props.open ? '258px' : '0px'};
    transition: height 0.2s ease-in-out;

    & > form {
      & > input {
        width: 100%;
        margin: 0 auto;
        padding: 8px 16px;
        border: 2px solid var(--BK-Main-50);
        border-radius: 4px;
        transition: all 0.3s ease-in-out;
        font-size: 1.5em;

        &:focus {
          outline: none;
          border: 2px solid var(--Action);
        }
      }

      & > #buttons {
        margin-top: 24px;
        visibility: ${props => props.open ? 'visible' : 'hidden'};
        transition: opacity 1s ease-in-out;
        width: 100%;
        
        & > button {
          margin: 4px 0px;
          padding: 8px 16px;
          width: 100%;
          box-shadow: none;
          border: none;
          font-family: var(--Poppins);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          border-radius: 4px;

          &:hover{
            box-shadow: var(--Shadow);
          }
        }

        & > #cancel {
          background-color: var(--BTN);

          &:hover {
            background-color: var(--BTN-Hover);
          }
        }

        & > #confirm {
          background-color: var(--Alert);
          color: var(--WT-Main);

          &:hover {
            background-color: var(--Alert-Hover);
          }
        }
      }
    }

    & > h2 {
      text-align: center;
    }

    & > #buttons-delete {
      visibility: ${props => props.open ? 'visible' : 'hidden'};
      transition: opacity 1s ease-in-out;
      width: 50%;
      margin-top: 24px;
      
      & > button {
        position: relative;
        margin: 4px auto;
        padding: 8px 16px;
        width: 100%;
        box-shadow: none;
        border: none;
        font-family: var(--Poppins);
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border-radius: 4px;

        &:hover{
          box-shadow: var(--Shadow);
        }
      }

      & > #cancel {
        background-color: var(--BTN);

        &:hover {
          background-color: var(--BTN-Hover);
        }
      }

      & > #confirm {
        background-color: var(--Alert);
        color: var(--WT-Main);

        &:hover {
          background-color: var(--Alert-Hover);
        }
      }
    }
  }
`;

export { BookmarksContainer, ModalContainer };