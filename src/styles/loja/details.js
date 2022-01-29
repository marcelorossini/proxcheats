import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: black;
  color: #ffffff;
  padding: 20px;

  display: flex;
  flex-direction: column;
    & > * {
        margin-bottom: 10px;
    }
    & > *:first-child, & > *:last-child {
        margin-bottom: 0px;
    }

  @media (min-width: 600px) {
    & > * {
        margin-bottom: 0px;
    }
    column-gap: 20px;
    row-gap: 10px;
    display: grid;
    grid-template-columns: 50% auto;
    grid-template-rows: minmax(0,auto) auto 1fr 1fr auto auto;
    grid-template-areas: "Image Offer" "Image Title" "Image Description" "Image Price" "Image Button" "Info Info";
  }
  @media (min-width: 801px) {
    grid-template-columns: 60% auto;
  }
  @media (min-width: 1025px) {
    grid-template-columns: 70% auto;
  }
`;

export const Image = styled.img`
  grid-area: Image;
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
`;

export const Title = styled.strong`
  width: 100%;
  grid-area: Title;
  font-size: 48px;
`;

export const Description = styled.div`
  grid-area: Description;
  color: #fafafa80;
`;

export const Price = styled.div`
  width: 100%;
  grid-area: Price;
  align-self: center;
`;
export const PriceBefore = styled.div`
  text-decoration: line-through;
  font-size: 24px;
`;

export const PriceAfter = styled.div`
  font-size: 42px;
  color: var(--color-primary);
  font-weight: bold;
`;

export const Button = styled.div`
  grid-area: Button;
  width: 100%;
  padding: 10px;
  align-items: center;
  text-align: center;
  background: var(--color-primary);

  & > svg {
    height: 24px;
  }
`;
export const Offer = styled.div`
  grid-area: Offer;
  background: var(--color-primary);
  padding: 4px 10px;
`;

export const Info = styled.div`
  grid-area: Info;
`;

export const Details = styled.div`
  grid-area: Details;
`;
