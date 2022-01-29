import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`
:root {
  --color-primary: #e74c3c;
  --color-secondary: #1cc2b8;
  --color-tertiary: #2CD5C4;
  --color-text-primary: #ffffff;
  --color-red-mild: #e74c3c;
  --color-red-error: #801616;
  --color-grey-mild: #808084;
  --color-grey-dark: #444447;     
  --color-grey-light: #e9e9e9;   
  --color-grey-light-hover: #d4d4d4;
  --color-dark: #161616;
  --color-dark-light: #3a3a3a;
  --size-max-width: 1280px;
  --size-padding-1x: 20px;
}   

html, body {
  margin: 0;
  padding: 0;
  height: 100%;  
  background: var(--color-dark);
  color: #ffffff;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;        
  box-sizing: border-box;
}

ul {
  list-style: none;   
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}

p {
  display: inline-block;
}

div, img, p, svg {
  transition: all .3s;
}

.fontSizePrimary {
  font-size: 16px;
  
  @media (min-width: 414px) {
    font-size: 20px;
  }
  
  @media (min-width: 576px) {
    font-size: 24px;
  }
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
  
  @media (min-width: 768px) {
    font-size: 28px;
  }        
  
  @media (min-width: 1024px) {
    font-size: 32px;
  }        
}

.fontSizeSecondary {
  font-size: 14px;
  
  @media (min-width: 414px) {
    font-size: 18px;
  }
  
  @media (min-width: 768px) {
    font-size: 24px;
  }
  
  @media (min-width: 1024px) {
    font-size: 28px;
  }                
}    

.fontTitle {
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-size: 26px;       
  @media (min-width: 768px) {
    font-size: 40px;
  }
}
`;

export const animationSlideUp = keyframes`
0% {
  opacity: 0;
  transform: translateY(20px);
}
100% {
  opacity: 1;
  transform: translateY(0);
}
`;

export const animationSlideLeft = keyframes`
0% {
  opacity: 0;
  transform: translateX(20px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const animationSlideRight = keyframes`
0% {
  opacity: 0;
  transform: translateX(-20px);
}
100% {
  opacity: 1;
  transform: translateX(0);
}
`;

export const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const fadeOut = keyframes`
0% {
  opacity: 1;
}
100% {
  opacity: 0;
}
`;
