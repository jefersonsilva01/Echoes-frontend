import styled from "styled-components";

const TrendSection = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--WT-Main);
  padding: 32px 0;

  & > #trend-container {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 32px 32px;

    & > h2 {
      padding-bottom: 20px;
      border-bottom: 4px solid var(--BK-Main-50);
      margin: 0 auto 32px;
    }

    & > #trend-cards {
      display: flex;
      row-gap: 32px;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 auto;
    }
  }
`;

export { TrendSection };