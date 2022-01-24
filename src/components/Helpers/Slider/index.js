import "react-multi-carousel/lib/styles.css";
import { Container, Component, ArrowButton } from "./style";
import { ArrowIosBack, ArrowIosForward } from "@styled-icons/evaicons-solid";

const Slider = (props) => {
  const { children, ...restOfProps } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 768 },
      items: 4,
      slidesToSlide: 4,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Component
        infinite={true}
        responsive={responsive}
        keyBoardControl={true}
        customButtonGroup={<ButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
        {...restOfProps}
      >
        {children}
      </Component>
    </Container>
  );
};

export default Slider;

const ButtonGroup = ({ next, previous }) => {
  return (
    <div>
      <ArrowButton left onClick={() => previous()}>
        <div>
          <ArrowIosBack />
        </div>
      </ArrowButton>
      <ArrowButton right onClick={() => next()}>
        <div>
          <ArrowIosForward />
        </div>
      </ArrowButton>
    </div>
  );
};
