import styled from "styled-components";

const CardContainer = styled.div`
  background-color: var(--WT-Main);
  width: 374px;
  height: auto;
  border-radius: 8px;
  border: 1.5px solid var(--BK-Main-50);
  padding: 16px;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--BG-Card);
    cursor: pointer;
    box-shadow: 0px 5px 10px 0px var(--BK-Main-50);
  }

  & > a {
    text-decoration: none;
    color: unset;
    
    & #profile-data {
      display: flex;
      margin-bottom: 12px;

      & > img {
        width: 48px;
        height: 48px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }

      & #profile-info {
        margin-left: 16px;

        & :nth-child(2) {
          color: var(--BK-Main-50);
          font-size: 14px;
        }
      }
    }

    & > img {
      margin-bottom: 12px;
      border-radius: 4px;
      width: 100%;
      height: 178px;
      object-fit: cover;
      object-position: center;

      // Mobile
      @media (max-width: 620px) {
        width: 100%;
      }
    }

    & > h4 {
      margin-bottom: 12px;

      // Mobile
      @media (max-width: 620px) {
        font-size: 14px;
      }
    }

    & > p {
      color: var(--BK-Main-50);
      height: 64px;
      overflow: hidden;
      font-size: 14px;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
      text-overflow: ellipsis;  

      // Mobile
      @media (max-width: 620px) {
        font-size: 14px;
      }
    }
  }
`;

const ModalContainer = styled.div`
  background-color: var(--BK-Main-50);
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  top: 0px;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  opacity: ${props => props.open ? '1' : '0'};
  transition: opacity 0.1s ease-in-out;

  & > #modal {
    position: relative;
    background-color: var(--WT-Main);
    border-radius: 8px;
    padding: 64px 32px;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    top: 25%;
    margin: 0 auto;
    height: ${props => props.open ? 'auto' : '0px'};
    transition: height 0.2s ease-in-out;

    & > h2 {
      width: 100%;
      text-align: center;
      opacity: ${props => props.open ? '1' : '0'};
      transition: opacity 1s ease-in-out;
    }

    & > #buttons {
      margin-top: 24px;
      visibility: ${props => props.open ? '1' : '0'};
      transition: opacity 1s ease-in-out;
      width: 50%;
      
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
`


export { CardContainer, ModalContainer }