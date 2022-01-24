import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  //min-height: ${({ viewHeight }) =>
    viewHeight ? `calc(${viewHeight}px * 100)` : "100vh"};
  min-height: 100vh;
  /* mobile viewport bug fix */
  display: flex;

  ${({ backgroundColor }) =>
    backgroundColor &&
    `
    background: ${backgroundColor};
  `}

  ${({ backgroundImage }) =>
    backgroundImage &&
    `
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `}

  ${({ fixMinHeightIos }) =>
    fixMinHeightIos &&
    `
    @media not all and (min-resolution: .001dpcm) {
      @supports (-webkit-appearance:none) and (stroke-color: transparent) {
        min-height: -webkit-fill-available;       
      }
    }
  `}
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: var(--size-max-width);
  min-height: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  @media (min-width: 414px) {
    padding: 40px;
  }
`;
