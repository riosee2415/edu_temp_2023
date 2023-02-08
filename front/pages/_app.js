import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "antd/dist/reset.css";
import styled from "styled-components";

const Whole = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Fourleaf = ({ Component }) => {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>NEXT App</title>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Header />

      <Whole>
        <Component />
      </Whole>

      <Footer />
    </>
  );
};

export default Fourleaf;
