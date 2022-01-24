import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: var(--color-text-primary);
`;

export const Error = styled.p`
  margin: 2px 0;
  color: #ffffff;

  ${({ secondary }) =>
    secondary &&
    `
    color: red;
  `}
`;

export const Button = styled.button`
  border-radius: 5px;
  box-shadow: 1px 1px 3px #00000010;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  height: ${({ height }) => height || "46px"};
  margin: ${({ margin }) => margin || "0"};
  font-size: 16px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: ${({ widthDesktop }) => widthDesktop || "100%"};
  }

  ${({ secondary, danger }) => {
    let css = "";
    if (secondary) {
      css = `
        background: var(--color-grey-light);
        color: var(--color-blue-dark) !important;
        &:hover {
          background: var(--color-grey-light-hover);
        }    
      `;
    } else if (danger) {
      css = `
        background: var(--color-red-mild);
        color: #fff;
        &:hover {
          background: var(--color-red-error);
        }  
      `;
    } else {
      css = `  
        color: #ffffff;
        background: var(--color-primary);
        &:hover {
          background: #00948a;
        }`;
    }
    return css;
  }}

  &:disabled,
  &[disabled] {
    background: #fafafa;
    color: #79778b !important;
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const GroupInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    ${({ labelSize }) =>
      labelSize &&
      `    
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      & > *:first-child {
        width: ${labelSize};
      }

      & > *:nth-child(2) {
        flex: 1;
      }

      & > *:nth-child(3) {
        padding-left: ${labelSize};
        width: 100%;
      }
    `};
  }
`;

export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${({ gap }) =>
    gap &&
    `    
      & > * {
        margin-right: ${gap};
      }
      & > *:last-child {
        margin-right: 0;
      }
    `};
`;

export const Input = styled.input`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "30px"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: 0 10px;
  border: ${({ alternative }) =>
    alternative ? "#ffffff" : "1px solid var(--color-primary)"};
  -webkit-appearance: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;

  &:not([data-error=""])::placeholder {
    color: #7f8c8d;
  }
  ${({ secondary }) =>
    secondary &&
    `
    border: none !important;
    border-radius: 0px;
    padding: 0px;
    margin: 0px;
    height: auto;
  `}
  ${({ error }) =>
    error
      ? `    
      border: 1px solid var(--color-red-mild) ;
    `
      : `
      &:focus {
        border: 1px solid var(--color-primary);
      }
      &:hover {
        border: 1px solid var(--color-primary);
      }
    `};
`;

export const CheckBox = styled.div`
  cursor: pointer;
  & > label + input {
    padding-right: 10px;
  }
  & > input + label {
    padding-left: 10px;
  }
`;

export const Select = styled.select`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "30px"};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  padding: 0 10px;
  border: ${({ alternative }) =>
    alternative ? "#ffffff" : "1px solid var(--color-primary)"};
  -webkit-appearance: none;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s;

  ${({ secondary }) =>
    secondary &&
    `
    border: none !important;
    border-radius: 0px;
    padding: 0px;
    margin: 0px;
    height: auto;
  `}
  ${({ error }) =>
    error
      ? `    
      border: 1px solid var(--color-red-mild) ;
    `
      : `
      &:focus {
        border: 1px solid var(--color-primary);
      }
      &:hover {
        border: 1px solid var(--color-primary);
      }
    `};
`;
