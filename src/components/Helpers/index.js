// Style
import { Container } from "./style";

const Page = (props) => {
  return <Container {...props}>{props.children}</Container>;
};
export default Page;
