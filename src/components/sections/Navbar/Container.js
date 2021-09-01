import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

const NavbarContainer = ({ children, ...props }) => (
  <Flex
    zIndex={1000}
    as="nav"
    align="center"
    position="fixed"
    justify="space-between"
    wrap="wrap"
    w="100vw"
    boxShadow="2xl"
    marginBottom="1rem"
    p={4}
    bg={useColorModeValue("primary.500", "gray.900")}
    color={useColorModeValue("white", "gray.300")}
    {...props}
  >
    {children}
  </Flex>
);

export default NavbarContainer;
