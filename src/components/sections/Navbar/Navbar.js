import { React, useState } from "react";
import { Link } from "@chakra-ui/react";

import Container from "./Container";
import Logo from "../../Logo";
import MenuItems from "./MenuItems";
import MenuToggle from "./MenuToggle";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container {...props}>
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
      <MenuItems isOpen={isOpen} />
    </Container>
  );
};

export default Navbar;
