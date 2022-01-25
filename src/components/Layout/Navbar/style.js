import styled from "styled-components";

export const Container = styled.div`
  grid-area: Navbar;
  height: 70px;
  width: 100%;
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 3px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  color: var(--color-text-primary);
  position: relative;
  z-index: 100;
  background: var(--color-dark-light);

  & svg {
    height: 18px;
    margin-right: 12px;
    color: var(--color-text-primary);
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  flex: 1;
`;

export const Label = styled.div`
  color: var(--color-text-primary);
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  padding: 10px;

  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }

  ${({ name }) =>
    name === "menu" &&
    `
      @media (min-width: 768px) {
        display: none;
      }
    `}
`;
