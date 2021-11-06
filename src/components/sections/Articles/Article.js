import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Article = ({ articleLink, title, subtitle, image, date }) => (
  <Flex
    align="center"
    justify={{ base: "center", md: "space-around", xl: "space-between" }}
    direction={{ base: "column-reverse", md: "row" }}
    wrap="no-wrap"
    maxW="80vw"
    px={8}
    mt={["3rem", "3rem", "4rem", "4rem"]}
  >
    <Stack
      spacing={4}
      w={{ base: "80%", md: "40%" }}
      align={["center", "center", "flex-start", "flex-start"]}
    >
      <Link to={articleLink}>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
          transition={"color 0.3s ease"}
          _hover={{
            color: "primary.600",
          }}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color={useColorModeValue("gray.900", "gray.300")}
          fontWeight="normal"
          lineHeight={1.5}
          mt={3}
          textAlign={["center", "center", "justify", "justify"]}
          transition={"color 0.3s ease"}
          _hover={{
            color: useColorModeValue("gray.500", "gray.400"),
          }}
        >
          {subtitle}
        </Heading>
      </Link>

      <Text
        fontSize="s"
        mt={2}
        textAlign="center"
        color={useColorModeValue("gray.900", "gray.300")}
        opacity="0.6"
        transition={"color 0.3s ease"}
        _hover={{
          color: useColorModeValue("gray.500", "gray.500"),
        }}
      >
        {date}
      </Text>
    </Stack>
    <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 5, md: 0 }}>
      <Link to={articleLink}>
        <Image
          src={image}
          size="100%"
          width="50vw"
          rounded="1rem"
          shadow="2xl"
          transform="scale(1.0)"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.01)",
          }}
        />
      </Link>
    </Box>
  </Flex>
);

export default Article;
