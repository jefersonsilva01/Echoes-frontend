import styled from "styled-components";

const BookmarksContainer = styled.section`
  background-color: var(--WT-Main);
  width: 100vw;
  height: calc(100vh - 71px);
  height: fit-content;
  top: 71px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  padding: 16px 64px;

  & > #new-bookmark {
    width: calc(20% - 16px);
    height: 193px;
    padding: 32px;
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--BK-Main-50);
    cursor: pointer;
    background-color: var(--BG-Card);
    transition: 0.3s all ease-in-out;
    margin: 0 4px 16px; 

    &:hover {
      background-color: var(--BTN-Hover);
      
      & > svg > path {
        fill: var(--Action);
      }
    }
  }

  & > .bookmark {
    cursor: pointer;    
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 8px;
    margin: 0 4px 16px;
    width: calc(20% - 16px);
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    transition: all 0.3s ease-in-out;

    & > svg > path {
      fill: var(--BTN);
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      border: 1px solid var(--BK-Main-50);

      & > svg > path{
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
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
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
        visibility: ${props => props.open ? '1' : '0'};
        transition: opacity 1s ease-in-out;
        
        & > button {
          margin: 0 8px;
          padding: 8px 16px;
          width: 174px;
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

    & > #buttons {
      margin-top: 24px;
      visibility: ${props => props.open ? '1' : '0'};
      transition: opacity 1s ease-in-out;
      
      & > button {
        margin: 0 8px;
        padding: 8px 16px;
        width: 174px;
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