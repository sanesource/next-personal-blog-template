import { NextPage } from "next";
import Container from "../components/Container";
import Header from "../components/Header";
import Head from "../components/_head";

const Contact: NextPage = () => {
  return (
    <Container>
      <Head title="About" />
      <Header />
      <h1>Contact</h1>
    </Container>
  );
};

export default Contact;
