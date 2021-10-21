import { NextPage } from "next";
import Container from "../components/Container";
import Head from "../components/_head";
import Header from "../components/Header";

const About: NextPage = () => {
  return (
    <Container>
      <Head title="About" />
      <Header />
    </Container>
  );
};

export default About;
