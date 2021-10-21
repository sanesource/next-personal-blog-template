import { NextPage } from "next";
import Container from "../../components/Container";
import Head from "../../components/_head";
import Header from "../../components/Header";

const Blogs: NextPage = () => {
  return (
    <Container>
      <Head title="About" />
      <Header />
      <h1>Blogs</h1>
    </Container>
  );
};

export default Blogs;
