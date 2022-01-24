import Head from "next/head";

import { Container } from '../styles/loja'
import Layout from "../components/Layout";
import Card from "../components/Pages/Loja/Card"

export default function Index() {
  return (
    <Layout>
      <Container>
        <Card />
        <Card />
      </Container>
    </Layout>
  );
}
