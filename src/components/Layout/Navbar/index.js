import { useRouter } from "next/router";

// Style
import { Container, ButtonMenu } from "./style";

import { ArrowBack, Menu, Search } from "@styled-icons/boxicons-regular";

const Navbar = (props) => {
  const router = useRouter();
  const { title, handleToogleSidebar } = props;

  return (
    <Container>
      <ButtonMenu onClick={() => handleToogleSidebar()}>
        <Menu />
      </ButtonMenu>
      Prox
      <ButtonMenu onClick={() => handleToogleSidebar()}>
        <Search />
      </ButtonMenu>
      {/*<ArrowBack onClick={() => router.back()} />*/}
    </Container>
  );
};
export default Navbar;
