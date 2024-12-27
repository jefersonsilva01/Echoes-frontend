import styled from "styled-components";

const CardContainer = styled.div`
  background-color: var(--WT-Main);
  width: 374px;
  height: 490px;
  border-radius: 8px;
  border-color: var(--BK-Main-50);
  padding: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--BG-Card);
    cursor: pointer;
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
  }

  & > h4 {
    margin-bottom: 12px;
  }

  & > p {
    color: var(--BK-Main-50);
    height: 64px;
    overflow: hidden;
    font-size: 14px;
    margin-bottom: 16px;
  }

  & > #social-icons {
    display: flex;
    align-items: center;

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