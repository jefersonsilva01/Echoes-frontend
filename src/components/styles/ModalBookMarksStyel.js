import styled from "styled-components";

const ModalBookmarkContainer = styled.div`
  background-color: var(--BK-Main-50);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  visibility: ${props => props.open ? 'visibile' : "hidden"};

  & > #modal-bookmarks {
    background-color: var(--WT-Main);
    height: auto;
    width: 100%;
    max-width: 400px;
    position: relative;
    margin: 0 auto;
    padding: 16px;
    top: 25%;
    border-radius: 4px;

    & > form {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      opacity: ${props => props.open ? "1" : "0"};
      transition: opacity 0.3s ease-in-out;

      & > label {
        margin: 8px 0;
        display: flex;
        align-items: center;

        & > input {
          margin-right: 8px;
          width: 20px;
          height: 20px;
          accent-color: var(--BK-Main);
        }
      }

      & > button {
        margin: 8px 0;
        padding: 8px 16px;
        font-size: 1em;
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

export { ModalBookmarkContainer };