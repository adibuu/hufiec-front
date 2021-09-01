import React from "react";
import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ title, to }) => (
  <Link href={to} style={{ textDecoration: "none" }}>
    <Text
      display="block"
      fontSize={["md", "md", "lg", "lg"]}
      fontWeight="bold"
      mr={[null, null, "1rem", "2rem"]}
      transition={"color 0.3s ease"}
      _hover={{
        color: "primary.700",
      }}
    >
      {title}
    </Text>
  </Link>
);

export default MenuItem;
