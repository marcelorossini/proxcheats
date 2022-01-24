import styled from "styled-components";

export const DrapAndDrop = styled.div`
  display: contents;
  outline: none;
  ${({ noClick }) =>
    !noClick &&
    `
    cursor: pointer;
  `}
  & > * {
    transition: 0.3s all;
    ${({ isDragActive }) =>
      isDragActive &&
      `
      background: #3498db10;
    `}
  }
`;

export const Image = styled.div`
  width: 100%;

  & > img {
    width: 100%;
  }
  @media (min-width: 768px) {
    & > img {
      width: 300px;
    }
  }
  ${({ urlImage }) =>
    !urlImage &&
    `
   height: 0;
  `}
`;

export const ImageGallery = styled.div`
  ${({ urlImage }) =>
    urlImage &&
    `
    & > button {
      margin-top: 10px;
    }
  `}
`;

export const ButtonUpload = styled.button`
  font-size: 16px;
  margin-right: 10px;
  color: var(--color-text-primary);
  & > svg {
    width: 24px;
    color: ${({ secondary }) => (secondary ? "red" : "var(--color-primary)")};
  }
`;
