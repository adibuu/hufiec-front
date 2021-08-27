import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("primary.900", "primary.900")}
      color={useColorModeValue("white", "gray.800")}
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank"
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("primary.200", "primary.600"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
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
          <SocialButton label={"Facebook"} href={"https://chakra-ui.com/"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://chakra-ui.com/"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
