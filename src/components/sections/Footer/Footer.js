import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialButton from "./SocialButton";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useSelector } from "react-redux";

const Footer = () => {
  const contact = useSelector((state) => state.contact);

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("primary.900", "primary.900")}
      mt="2rem"
    >
      <Container
        as={Stack}
        fontWeight="bold"
        maxW="7xl"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={10}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>Copyright © 2021 Hufiec ZHP. Wszystkie prawa zastrzeżone. </Text>
        <Stack direction={"row"} spacing={5}>
          <SocialButton label={"Facebook"} href={contact.facebookURL}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={contact.instagramURL}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
