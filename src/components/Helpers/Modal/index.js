// NextJS
import { useState, useEffect } from "react";
import { render } from "react-dom";

// Styles
import {
  Container,
  Wrapper,
  Header,
  Main,
  BackgroundClose,
  ButtonClose,
  Title,
  CloseIcon,
} from "./style";

const Modal = (props) => {
  // Props
  const {
    title,
    callbackActive,
    component,
    options = {},
    ...restOfProps
  } = props;
  const { close = true } = options;

  // States
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(true);
  }, [callbackActive]);

  return (
    <Container active={active}>
      <Wrapper active={active} {...restOfProps}>
        <Header>
          <Title>{title}</Title>
          {close && (
            <ButtonClose onClick={() => setActive(false)}>
              <CloseIcon />
            </ButtonClose>
          )}
        </Header>
        <Main>{component}</Main>
      </Wrapper>
      {close && <BackgroundClose onClick={() => setActive(false)} />}
    </Container>
  );
};
export default Modal;

export const showModal = (props) => {
  if (!process.browser) return;
  let divModal = document.getElementById("modal");
  if (!divModal) {
    divModal = document.createElement("div");
    divModal.id = "modal";
    document.body.appendChild(divModal);
  }

  // Callback
  const callback = new Date();

  // Renderiza componente
  render(<Modal {...props} callbackActive={null || callback} />, divModal);
};

export const hideModal = () => {
  const divModal = document.getElementById("modal");
  divModal.remove();
};
