import React from "react";
import { Flex, SlideFade } from "@chakra-ui/react";

import Navbar from "../components/sections/Navbar/Navbar";
import Footer from "../components/sections/Footer/Footer";
import { useSelector } from "react-redux";

const Layout = (props) => {
  const showFooter = useSelector((state) => state.ui.footer);

  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "100vw" }}
      m="0 auto"
      {...props}
    >
      <Navbar />
      {props.children}
      {showFooter ? (
        <SlideFade in={showFooter}>
          <Footer />
        </SlideFade>
      ) : null}
    </Flex>
  );
};

export default Layout;
