import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb="2rem"
      mt="5rem"
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Link to={ctaLink}>
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
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
            textAlign={["center", "center", "left", "left"]}
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
        >
          08.09.2023
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Link to={ctaLink}>
          <Image
            src={image}
            size="100%"
            width="100%"
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
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image:
    "https://www.barnardandwestwood.com/wp-content/uploads/2014/09/Forrest-Free-HQ-Background-5_1030x690.jpg",
  ctaText: "Create your account now",
  ctaLink: "/",
};
