import React from "react";
import { chakra, Box, useColorModeValue, Icon } from "@chakra-ui/react";

const ContactData = (props) => {
  return (
    <Box>
      <Icon
        boxSize={24}
        color={useColorModeValue("primary.700", "gray.300")}
        mb={4}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon}
      </Icon>
      <chakra.h3
        mb={3}
        fontSize="xl"
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue("gray.900", "gray.300")}
      >
        {props.title}
      </chakra.h3>
      <chakra.p
        lineHeight="tall"
        fontSize="lg"
        fontWeight="bolder"
        color={useColorModeValue("gray.600", "gray.400")}
        transition={"color 0.3s ease"}
        _hover={{
          color: "primary.800",
        }}
      >
        {props.children}
      </chakra.p>
    </Box>
  );
};

export default ContactData;
