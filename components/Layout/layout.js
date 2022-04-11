import React from 'react';
import Head from "next/head";
import Header from "../Header/header";
import {Container} from "@mui/material";
import Footer from "../Footer/footer";
import TopBar from "../TopBar/top-bar";

const Layout = ({children,categories}) => {
  return (
      <>
        <Head>
          <title>YaRodilsya</title>
          <meta name='description' content='YaRodilsya description here.'/>
        </Head>
        <TopBar />
        <Header categories={categories}/>
        <Container>{children}</Container>
        <Footer/>
      </>

  );
};

export default Layout;