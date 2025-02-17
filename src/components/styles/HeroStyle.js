import styled from "styled-components";

const HeroSection = styled.div`
  width: 100%; 
  margin: 0 auto;
  height: 100vh;
  padding-bottom: 32px;
  background-color: var(--BK-Main);

  @media (max-width: 1040px) {
    height: fit-content;
  }

  & > div {
    max-width: 1440px;
    margin: 0 auto;

    & > h1 {
      color: var(--WT-Main);
      font-size: 20em;
      width: fit-content;
      line-height: 1;
      margin: 0 auto;
      padding: 72px 0 0;
      text-align: center;
      border-bottom: solid 5px var(--WT-Main);

      // Desktop
      @media(max-width: 1440px) {
        font-size: 23vw;
      };

      // Tablet
      @media(max-width: 1040px) {
        padding-top: 72px;
      };

      & + p {
        color: var(--WT-Main);
        font-size: 1em;
        font-weight: 500;
        max-width: fit-content;
        margin-top: 32px;
        margin-left: 4%;

        & + p {
          color: var(--WT-Main);
          font-size: 1em;
          font-weight: 500;
          max-width: fit-content;
          margin-top: 32px;
          margin-left: 4%;

          @media(max-width: 620px) {
            margin-top: 24px;
          };
        }
      };
    }
  };
`;

export { HeroSection }