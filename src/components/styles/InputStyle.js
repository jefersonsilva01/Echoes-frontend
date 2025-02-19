import styled from "styled-components";

const InputStyle = styled.div`
  background-color: var(--WT-Main);
  padding: 6px 16px;
  border-radius: 4px;
  border: solid 2px var(--BK-Main-50);
  display: flex;
  align-items: center;
  width: max-content;
  margin-right: 15px;

  &:has(input:focus) {
    border: solid 2px var(--Action-Hover);
  }

  & > input {
    width: 250px;
    font-size: 16px;
    font-family: var(--Poppins);
    font-weight: 500;
    text-color: var(--BK-Main);
    border: none;
    outline: none;
    transition: width 0.3s ease-in-out;
    
    &:focus {
      width: 438px;
    }
  };

  & > a {
    height: 24px;
  }

  & > a > svg:hover {
    cursor: pointer;
    & > path {
      fill: var(--Action);
    }
  };

  // Mobile
  @media (max-width: 620px) {
      display: none;
  }
`;

export { InputStyle };