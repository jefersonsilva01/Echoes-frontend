import styled from "styled-components";

const ProfileContainer = styled.div`
  background-color: var(--WT-BG);
  height: calc(100vh - 63px);
  position: relative;
  top: 57px;
  display: flex;
  justify-content: center;
  padding: 10% 8px 0;

  & > #profile-card {
    background-color: var(--WT-Main);
    border-radius: 16px;
    padding: 32px 16px;
    max-height: 504px;
    max-width: 384px;

    & > form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;

      & > label {
        border-radius: 50%;

        & > img {
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          width: 121px;
          height: 121px;
          transition: all 0.3s ease-in-out;

          &:hover {
            opacity: 0.5;
            cursor: pointer;
          }
        }
      }


      input[name="imgName"] {
        display: none;
      }

      & input {
        border-radius: 4px;
        border: 2px solid var(--BK-Main-50);
        box-shadow: none;
        outline: none;
        padding: 8px 16px;
        margin: 8px 0;
        font-family: var(--Poppins);
        color: var(--BK-Main-50);
        font-size: 1em;
        max-width: 352px;
        width: 100%;

        &:focus {
          color: var(--BK-Main);
        }
      }

      & > input[name="username"] {
        text-align: center;
        font-size: 2.5em;
        border: none;
        max-width: 352px;
        color: var(--BK-Main);
      }

      & div {
        display: flex;
        align-items: center;
        border: 2px solid var(--BK-Main-50);
        border-radius: 4px;
        margin-top: 16px;

        & > svg {
          cursor: pointer;
          margin-right: 16px;
          
          
          & > path {
            fill: var(--BK-Main-50);
            transition: fill 0.3s ease-in-out;
          }

          &:hover {
            & > path {
              fill: var(--BK-Main);
            }
          }
        }

        & > input[name="password"] {
          border: none 3px red;
          margin: 0;
        }
      }

      & > button {
        padding: 8px 0;
        margin-bottom: 32px;
        font-family: var(--Poppins);
        font-size: 1em;
        font-weight: 500;
        border: none;
        border-radius: 4px;
        transition: box-shadow 0.3s ease-in-out;
        cursor: pointer;
        max-width: 352px;
        width: 100%;


        &[name="submit"] {
          background-color: var(--BTN);
          margin-top: 24px;

          &:enabled:hover {
            background-color: var(--BTN-Hover);
            box-shadow: var(--Shadow);
          }
        }

        &[name="delete"] {
          background-color: var(--Alert);
          color: var(--WT-Main);

          &:hover {
            background-color: var(--Alert-Hover);
            box-shadow: var(--Shadow);
          }
        }
      }
    }
  }
`

const ModalContainer = styled.div`
  background-color: var(--BK-Main-50);
  position: absolute;
  z-index: 2;
  height: calc(100% - 10px);
  width: 100%;
  top: 14px;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? '1' : '0'};
  transition: opacity 0.1s ease-in-out;

  & > #modal {
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

    & > h2 {
      width: 377px;
      text-align: center;
      opacity: ${props => props.open ? '1' : '0'};
      transition: opacity 1s ease-in-out;
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
`

export { ProfileContainer, ModalContainer };