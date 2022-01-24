import styled, { keyframes } from "styled-components";

export const Grid = styled.div`
  width: 100%;
  height: 100vh;
  padding: 32px;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  color: #ffffff;
  overflow-y: auto;
`;

export const Image = styled.div`
  width: 128px;
  height: 128px;
  overflow: hidden;
  border-radius: 100%;
  margin: 0 auto;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Name = styled.h1``;

export const Description = styled.p``;

export const WrapperButtons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const onHoverItem = keyframes`
  0% {
    transform: scale(1);
  }  
  30% {
    transform: scale(1.1);
    box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.10);
  }
  40% {
    transform: scale(1.2);
  }
  50% {
    box-shadow: 0px 0px 80px 0px rgba(255,255,255,0.10);
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
    box-shadow: 0px 0px 20px 0px rgba(255,255,255,0.10);
  }
  80% {
    transform: scale(1);
  }    
`;

export const Button = styled.a`
  flex: 1;
  width: 100%;
  background: #ffffff;
  margin-bottom: 20px;
  font-size: 18px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000000;
  padding: 10px 0;
  max-height: 100px;

  &:last-child {
    margin-bottom: 0px;
  }

  &:hover {
    animation: ${onHoverItem} 1.2s linear infinite;
  }

  & > svg {
    height: 20px;
    margin-right: 6px;
  }
`;

export const Footer = styled.h3``;
