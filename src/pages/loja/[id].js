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
  Info,
  Details,
} from "../../styles/loja/details";
import Layout from "../../components/Layout";
import { Cart } from "@styled-icons/boxicons-regular";

export default function Index() {
  return (
    <Layout>
      <Container>
        <Image src="https://1.bp.blogspot.com/-Frhy8mg-PRQ/YQHSAYs3CjI/AAAAAAAAAjY/b3MZBxnIuEEwvyP7qovfAUX0QKVLoCR4gCLcBGAsYHQ/s16000/call-duty-cold-war-capa.jpg" />
        <Offer>5% de Desconto</Offer>
        <Title>Call of duty</Title>
        <Description>
          Uns dos maiores site de template Do Brasil que disponibiliza template
          de alta qualidade para blog de games,filmes,seriados,humor e muito
          mais para vo…
        </Description>
        <Price>
          <PriceAfter>R$ 50,00</PriceAfter>
          <PriceBefore>R$ 60,00</PriceBefore>
        </Price>

        <Button>
          <Cart /> COMPRAR AGORA
        </Button>
        <Info>
          ESP <br />
          <br />
          (+) SHOW BOX <br />
          (+) SHOW HEALTH BAR <br />
          (+) SHOW HEAD <br />
          (+) SHOW SKELETON
          <br />
          <br />
          <br />
          (+) SHOW DISTANCE <br />
          (+) SHOW LINES <br />
          (+) MORE AIM <br />
          (+) AIMBOT <br />
          (+) AIMBOT
          <br />
          <br />
          <br />
          HITBOX (+) AIMBOT CUSTOM KEY <br />
          (+) CUSTOM SMOOTHING <br />
          (+) DRAW FOV <br />
          (+)
          <br />
          MORE
        </Info>
        <Button>
          <Cart /> COMPRAR AGORA
        </Button>
      </Container>
    </Layout>
  );
}
