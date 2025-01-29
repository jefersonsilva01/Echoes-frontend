import styled from "styled-components";

const ArticleContainer = styled.section`
  position: relative;
  top: 71px;
  background-color: var(--WT-Main);
  min-height: calc(100vh - 71px);
  padding-bottom: 32px;

  & > #article {
    margin: 0 auto;
    width: 60%;
    padding: 56px 8px 0;
    position: relative;

    & > #date {
      color: var(--BK-Main-50);
      white-space: pre-line;
      word-break: break-word;
      overflow-wrap: break-word;
      width: 100%;
    }

    & > #title {
      margin-top: 8px;
      font-weight: 500;
      font-size: 2.25rem;
    }

    & > #description {
      margin-top: 8px;
      color: var(--BK-Main-50);
      white-space: pre-line;
      word-break: break-word;
      overflow-wrap: break-word;
      width: 100%;
    }

    & > #info {
      margin-top: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > #social-icons {
        display: flex;
        align-items: center;
        width: 120px;
        justify-content: space-between;

        & > #heart, #bookmarks {
          display: flex;
          align-items: center;
          
          & > svg {
            margin-right: 8px;
          }
        }
      }
    }
    
    & > #cover {
      width: 100%;
      max-width: 799px;
      max-height: 368px;
      margin-top: 40px;
      border-radius: 12px;
      margin-bottom: 52px;
    }

    & > hr {
      border: 1.5px solid var(--BK-Main-50);
      margin-bottom: 36px;
    }

    & > .paragraph {
      color: var(--BK-Main-50);
      white-space: pre-line;
      word-break: break-word;
      overflow-wrap: break-word;
      margin: 12px 0;
    }

    & > .subtitle {
      margin: 12px 0;
      font-weight: 500;
    }
  }
`

export { ArticleContainer };