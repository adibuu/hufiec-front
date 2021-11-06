import React from "react";
import { Flex } from "@chakra-ui/react";

import Navbar from "../components/sections/Navbar/Navbar";
import Footer from "../components/sections/Footer/Footer";

const Layout = (props) => (
  <Flex
    direction="column"
    align="center"
    maxW={{ xl: "100vw" }}
    m="0 auto"
    {...props}
  >
    <Navbar />
    {props.children}
    <Footer />
  </Flex>
);

export default Layout;
