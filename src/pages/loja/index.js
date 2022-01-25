import { useRouter } from "next/router";

import { Container } from '../../styles/loja/index'
import Layout from "../../components/Layout";
import Card from "../../components/Pages/Loja/Card"

export default function Index() {
  const router = useRouter();
  const handleDetails = () => {
    router.push('loja/teste')
  }

  return (
    <Layout>
      <Container>
        <Card onClick={() => handleDetails()}/>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
    </Layout>
  );
}
