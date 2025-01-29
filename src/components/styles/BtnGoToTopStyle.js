import styled from "styled-components";

const GoToTopButton = styled.div`
  width: 100%;
  position: fixed;
  bottom: 120px;

  & > #go-to-top {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    position: relative;

    & > button {
      position: absolute;
      right: 15px;
      z-index: 2;
      background-color: var(--BK-Main);
      border-style: none;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      transition: box-shadow 0.3s ease-in-out;
      padding: 16px;

      &:hover {
        box-shadow: 0 5px 5px 0px #363636;
        cursor: pointer;
        
        & > svg > path {
          fill: var(--Active-Main);
        }
      }

    }
  }
`;

export { GoToTopButton }