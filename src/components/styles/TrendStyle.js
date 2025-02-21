import styled from "styled-components";

const TrendSection = styled.section`
  width: 100%;
  height: auto;
  background-color: var(--WT-Main);
  padding: 40px 16px;
  position: relative;

  & > h2 {
    max-width: 1240px;
    padding-bottom: 20px;
    border-bottom: 4px solid var(--BK-Main-50);
    margin: 0 auto 32px;
  }
`;

export { TrendSection };