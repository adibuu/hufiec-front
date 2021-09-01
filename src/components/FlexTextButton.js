import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  Link,
} from "@chakra-ui/react";

const FlexTextButton = ({ text, buttonText, link }) => (
  <Flex
    direction="column"
    alignItems="start"
    justifyContent="center"
    px={{ base: 4, md: 8, lg: 20 }}
    py={24}
    zIndex={3}
    mb={{ base: "-5rem", md: 0, lg: 0 }}
  >
    <chakra.h1
      mb={4}
      fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
      fontWeight="bold"
      color={useColorModeValue("primary.600", "gray.300")}
      lineHeight="shorter"
    >
      {text}
    </chakra.h1>
    <Box display="inline-flex" rounded="md" shadow="md">
      <Link href={link} isExternal style={{ textDecoration: "none" }}>
        <Button
          size="lg"
          fontWeight="bold"
          color={useColorModeValue("white", "gray.300")}
          bg={useColorModeValue("primary.600", "primary.800")}
          transition={"background 0.3s ease"}
          _hover={{
            bg: useColorModeValue("primary.700", "primary.900"),
            color: useColorModeValue("white", "gray.400"),
          }}
        >
          {buttonText}
        </Button>
      </Link>
    </Box>
  </Flex>
);

export default FlexTextButton;
