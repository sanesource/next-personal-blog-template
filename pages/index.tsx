import type { NextPage } from "next";
import Container from "../components/Container";
import Head from "../components/_head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <Container>
      <Head title="Home" />
      <Header />
    </Container>
  );
};

export default Home;
