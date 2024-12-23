import styled from "styled-components";

const HeroSection = styled.div`
  width: 100%; 
  margin: 0 auto;
  height: fit-content;
  padding-bottom: 32px;
  background-color: var(--BK-Main);

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

    & > #trend-news-card {
    display: flex;
    justify-content: space-around;
    margin: 24px auto 0;
    padding: 0 32px ;

      // Tablet
      @media(max-width: 1040px) {
        flex-direction: column;
      }

      // Mobile
      @media(max-width: 620px) {
        flex-direction: column;
      }

      & > #trend-news-img {
        overflow: hidden;
        border-radius: 12px;
        margin-right: 32px;
        width: fit-content;
        height: fit-content;

        // Tablet
        @media(max-width: 1040px) {
          width: 100%;
          margin-right: 0px;
        };

        // Mobile
        @media(max-width: 620px) {
          width: 100%;
          margin-right: 0px;
        };
      };

      & > #trend-news-img > a {
        background-image: url("./assets/Trend-news-desktop.png");
        background-repeat: no-repeat;
        background-size: auto;
        background-position: center;
        width: 592px;
        height: 369px;
        border-radius: 12px;
        display: block;
        transform: scale(1);
        transition: transform 0.3s ease-in-out;

        &:hover {
          transform: scale(1.1);
          cursor: pointer;
        }

        // Tablet
        @media(max-width: 1040px) {
          background-image: url("./assets/Trend-news-tablet.png");
          background-size: cover;
          width: 100%;
          height: 230px;
        };

        // Mobile
        @media(max-width: 620px) {
          background-image: url("./assets/Trend-news-mobile.png");
          background-size: cover;
          width: 100%;
          height: 216px;
        };
      };

      & > #news-info {
        margin-top: 8px;
        width: 50%;

        // Tablet
        @media(max-width: 1040px) {
          margin-top: 16px;
          width: 100%;
        };

        // Mobile
        @media(max-width: 620px) {
          margin-top: 16px;
          width: 100%;
        };

        & > #news-data {
          display: flex;
          justify-content: space-between;
          color: var(--WT-Main-50);
          margin-bottom: 24px;
          font-weight: 500;

          // Tablet
          @media(max-width: 1040px) {
            font-size: 16px;
            margin-bottom: 16px;
          }

          // Mobile
          @media(max-width: 620px) {
            font-size: 16px;
          };
        };
        

        & > h1 {
          color: var(--WT-Main);
          font-size: 2em;
          margin-bottom: 16px;

          // Tablet
          @media(max-width: 1040px) {
            font-size: 20px;
            margin-bottom: 8px;
          }

          // Mobile
          @media(max-width: 620px) {
            font-size: 1.5rem;
            margin-bottom: 16px;
          };
        };

        & > p {
            color: var(--WT-Main-50);
            width: 100%;
            font-size: 1.25em;
            margin-bottom: 16px;

            // Tablet
            @media(max-width: 1040px) {
              font-size: 16px;
              margin-bottom: 16px;
            }

            // Mobile
            @media(max-width: 620px) {
              font-size: 14px;
            };
          };

        & > a {
          text-decoration: none;
          color: var(--WT-Main);
          font-size: 1em;

          // Tablet
          @media(max-width: 1040px) {
            font-size: 16px;
            margin-bottom: 18px;
          }

          // Mobile
          @media(max-width: 620px) {
            font-size: 14px;
          };
        }

        & > #social-data {
          margin-top: 40px;
          display: flex;
          justify-content: space-between;
          width: 165px;

          // Tablet
          @media(max-width: 1040px) {
            margin-top: 16px;
          }

          // Mobile
          @media(max-width: 620px) {
            margin-top: 24px;
          };

          & > #heart {
            display: flex;
            width: 70px;
            cursor: pointer;

          // Tablet
          @media(max-width: 1040px) {
            & > svg {
              width: 18px;
              height: 18px;
            }
          }

          // Mobile
          @media(max-width: 620px) {
            & > svg {
              width: 24px;
              height: 24px;
            }
          }

            & > span {
              color: var(--WT-Main-50);
              font-size: 1em;
              margin-left: 8px;

              // Tablet
              @media(max-width: 1040px) {
                font-size: 12px;
              }

              // Mobile
              @media(max-width: 1040px) {
                font-size: 16px;
              }
            }
          };

          & > #bookmarks {
            display: flex;
            width: 70px;
            cursor: pointer;

            // Tablet
            @media(max-width: 1040px) {
              & > svg {
                width: 18px;
                height: 18px;
              }
            }

            // Mobile
            @media(max-width: 620px) {
              & > svg {
                width: 24px;
                height: 24px;
              }
            }

            & > span {
              color: var(--WT-Main-50);
              font-size: 1em;
              margin-left: 8px;

              // Tablet
              @media(max-width: 1040px) {
                font-size: 12px;
              }

              // Mobile
              @media(max-width: 1040px) {
                font-size: 16px;
              }
            }
          }
        }
      };
    };
  };
`;

export { HeroSection }