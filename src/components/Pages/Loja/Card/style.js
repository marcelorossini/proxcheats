import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #000;
  color: var(--color-grey-light);
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "Image Image" "Title Price" "Description Description" "Button Button";
  padding: 20px;
  gap: 10px;
`;

export const Image = styled.img`
  grid-area: Image;
  width: 100%;
`

export const Title = styled.strong`
  grid-area: Title;
  font-size: 32px;
`

export const Description = styled.div`
  grid-area: Description;
  color: #fafafa80;
`

export const Price = styled.div`
  grid-area: Price;
  align-self: center;
  justify-self: flex-end;
  text-align: right;
`
export const PriceBefore = styled.div`
  text-decoration: line-through;
  font-size: 16px;
`

export const PriceAfter = styled.div`
  font-size: 32px;
  color: red;
  font-weight: bold;
`

export const Button = styled.div`
  grid-area: Button;
  width: 100%;
  padding: 10px;
  align-items: center;
  text-align: center;
  background: red;
  
  & > svg {
    height: 24px;
  }
  `
export const Offer = styled.div`
  position: absolute;
  background: red;
  padding: 4px 10px;
`