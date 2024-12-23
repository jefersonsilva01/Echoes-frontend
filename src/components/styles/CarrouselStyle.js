import styled from "styled-components";

const FreshSection = styled.section`
  width: 100%;
  background-color: var(--BK-Main);

  & > #container {
    background-color: var(--BK-Secundary);
    max-width: 1440px;
    margin: 0 auto;
    padding: 16px 2% 54px ;
    overflow: hidden;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 2vw;
      height: 100%;
    };

    &::before {
      top: 0;
      left: 0;
      background: linear-gradient(to left, rgba(80, 82, 87, 0), rgba(32, 32, 32, 100));
    }

    &::after {
      top: 0;
      right: 0;
      background: linear-gradient(to right, rgba(80, 82, 87, 0), rgba(32, 32, 32, 100));
    }

    & > h2 {
      color: var(--WT-Main);
      border-bottom: 3px solid var(--WT-Main-50);
      padding: 0 0 16px;
      width: 100%;
      margin: 0 auto;
      max-width: 1440px;
    };
  }
`;

export { FreshSection };