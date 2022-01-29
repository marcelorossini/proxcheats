import { useRouter } from "next/router";

// Style
import { Container, Button, Logo, Label, Image } from "./style";

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
      <Logo onClick={() => router.push('/')}><Image src="/assets/logo.png"/></Logo>
      <Button onClick={() => alert()}>
        <Search /> <Label>Pesquisa</Label>
      </Button>
      <Button onClick={() => router.push('/login')}>
        <User /> <Label>Entrar</Label>
      </Button>
      {/*<ArrowBack onClick={() => router.back()} />*/}
    </Container>
  );
};
export default Navbar;
