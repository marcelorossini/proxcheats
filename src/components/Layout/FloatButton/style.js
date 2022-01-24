import styled from "styled-components";

export const Button = styled.a`
  position: fixed;
  bottom: 40px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;

  & > img {
    width: 40px;
  }

  & > img:hover {
    filter: brightness(120%);
  }

  @media (min-width: 414px) {
    bottom: 40px;
    right: 40px;
  }

  @media (min-width: 568px) {
    & > img {
      width: 56px;
    }
  }
`;
