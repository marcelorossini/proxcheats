import { useRouter } from "next/router";

// Style
import { Container, Button, Logo, Label } from "./style";

//
import { ArrowBack, Menu, Search, User } from "@styled-icons/boxicons-regular";

const Navbar = (props) => {
  const router = useRouter();
  const { title, handleToogleSidebar } = props;

  return (
    <Container>
      <Button onClick={() => handleToogleSidebar()} name="menu">
        <Menu />
      </Button>
      <Logo onClick={() => router.push('/')}>Prox</Logo>
      <Button onClick={() => handleToogleSidebar()}>
        <Search /> <Label>Pesquisa</Label>
      </Button>
      <Button>
        <User /> <Label>Entrar</Label>
      </Button>
      {/*<ArrowBack onClick={() => router.back()} />*/}
    </Container>
  );
};
export default Navbar;
