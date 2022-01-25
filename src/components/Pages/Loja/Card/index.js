import {
  Container,
  Offer,
  Image,
  Title,
  Description,
  Price,
  PriceBefore,
  PriceAfter,
  Button,
} from "./style";

import { Cart } from "@styled-icons/boxicons-regular";

export default function Card(props) {
  return (
    <Container {...props}>
      <Offer>5% de Desconto</Offer>
      <Image src="https://1.bp.blogspot.com/-Frhy8mg-PRQ/YQHSAYs3CjI/AAAAAAAAAjY/b3MZBxnIuEEwvyP7qovfAUX0QKVLoCR4gCLcBGAsYHQ/s16000/call-duty-cold-war-capa.jpg" />
      <Title>Call of duty</Title>
      <Description>
        Uns dos maiores site de template Do Brasil que disponibiliza template de
        alta qualidade para blog de games,filmes,seriados,humor e muito mais
        para vo…
      </Description>
      <Price>
          <PriceAfter>R$ 50,00</PriceAfter>          
          <PriceBefore>R$ 60,00</PriceBefore>
      </Price>
      <Button>
        <Cart /> COMPRAR
      </Button>
    </Container>
  );
}
