import React from "react";
import { Link, Box, Flex, Text, Stack } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import Logo from "../ux/Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo
          w="100px"
          color={["white", "white", "white", "white"]}
          ml={["0.5rem", "0.5rem", "1rem", "2rem"]}
        />
      </Link>
      <MenuToggle
        toggle={toggle}
        isOpen={isOpen}
        mr={["1rem", "1rem", null, null]}
      />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={8} h={8} />}
    </Box>
  );
};

const MenuItem = ({ children, to = "/", ...rest }) => {
  return (
    <Link href={to} style={{ textDecoration: "none" }}>
      <Text
        display="block"
        fontSize={["md", "md", "lg", "lg"]}
        fontWeight="bold"
        mr={[null, null, "1rem", "2rem"]}
        transition={"color 0.3s ease"}
        _hover={{
          color: ["primary.700", "primary.700", "primary.700", "primary.700"],
        }}
        {...rest}
      >
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={2}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">AKTUALNOŚCI</MenuItem>
        <MenuItem to="/druzyny">DRUŻYNY </MenuItem>
        <MenuItem to="/dokumenty">DOKUMENTY </MenuItem>
        <MenuItem to="/galeria">GALERIA </MenuItem>
        <MenuItem to="/kontakt">KONTAKT</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      position="fixed"
      justify="space-between"
      wrap="wrap"
      w="100vw"
      boxShadow="2xl"
      mb={8}
      p={4}
      bg={["primary.500", "primary.500", "primary.500", "primary.500"]}
      color={["white", "white", "white", "white"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
