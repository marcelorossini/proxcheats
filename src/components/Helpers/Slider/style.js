import styled from "styled-components";
import Carousel from "react-multi-carousel";

const maxWidth = 768;
export const Container = styled.div`
  width: 100%;
  position: relative;
  max-width: calc(${maxWidth}px + 100px);
  margin: 0 auto;
`;

export const Component = styled(Carousel)`
  max-width: ${maxWidth}px;
  margin: 0 auto;
`;

const widthArrow = 64;
export const ArrowButton = styled.button`
  width: ${widthArrow}px;
  height: 100%;
  position: absolute;
  top: -20px;
  ${({ left }) => left && "left: -15px;"}
  ${({ right }) => right && "right: -15px;"}  
  /*
  z-index: 1000;

  */

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > div > svg {
    cursor: pointer;
    color: #ffffff;
    width: ${widthArrow}px;
    transition: 0.3s all;
    transform: scale(1);
  }

  & > div > svg:hover {
    transform: scale(1.4);
  }
`;
