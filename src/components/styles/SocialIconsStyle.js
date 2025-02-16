import styled from "styled-components";

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;

  & > #edit-icons{
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: flex-end;

    & > svg {
      margin: 0 16px;

      & > path {
        transition: all 0.3s ease-in-out;
      }

      &:nth-child(1):hover > path {
        fill: var(--Alert);
      }
      
    }

    & > a {
      height: 24px;

      & > svg {
        margin: 0 16px;

        & > path {
          transition: all 0.3s ease-in-out;
        }

        &:nth-child(1):hover > path {
          fill: var(--Action);
        }
      }
    }
  }

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

  & > #bookmarks > svg > path {
    fill: ${props => props.bookmark === "true" ? "var(--Action)" : "var(--BK-Main)"};
  }

  & > #heart > svg > path {
    fill: ${props => props.like === "true" ? "var(--Alert)" : "var(--BK-Main)"};
  }
`;

export { SocialIconsContainer };