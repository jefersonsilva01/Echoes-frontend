import styled from "styled-components";

const CardsDisplayStyle = styled.section`
  height: auto;
  width: 100%;
  max-width: 1240px;
  position: relative;
  margin: 0 auto;

  & > #cards {
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    justify-content: center;
    width: 98.8%;
    margin: 0 auto;

    & > div {
      margin: 0 16px;
    }
  }
`;

export { CardsDisplayStyle };