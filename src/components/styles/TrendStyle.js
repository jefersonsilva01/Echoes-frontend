import styled from "styled-components";

const TrendSection = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--WT-Main);
  padding: 40px 16px;
  position: relative;

    & > h2 {
      padding-bottom: 20px;
      border-bottom: 4px solid var(--BK-Main-50);
      margin: 0 auto 32px;
    }

    & > #trend-cards {
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

export { TrendSection };