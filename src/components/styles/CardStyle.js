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

  &:hover {
    background-color: var(--BG-Card);
    cursor: pointer;
    box-shadow: 0px 5px 10px 0px var(--BK-Main-50);
  }

  & #profile-data {
    display: flex;
    margin-bottom: 12px;

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

    // Mobile
    @media (max-width: 620px) {
      font-size: 14px;
    }
  }

  & > #social-icons {
    display: flex;
    align-items: center;

    // Mobile
    @media (max-width: 620px) {
      font-size: 14px;
    }

    & #bookmarks, #heart {
      display: flex;
      align-items: center;

      & > span {
        margin-left: 16px;
      }
    }

    & > #bookmarks {
      margin-left: 32px;
    }
  }
`;

export { CardContainer }