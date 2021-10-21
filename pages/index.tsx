import type { NextPage } from "next";
import Container from "../components/Container";
import Head from "../components/_head";
import Header from "../components/Header";
import ReactMarkdown from "react-markdown";

const HomeContent = "";

const Home: NextPage = () => {
  return (
    <Container>
      <Head title="Home" />
      <Header />
      <ReactMarkdown>{HomeContent}</ReactMarkdown>
    </Container>
  );
};

export default Home;
