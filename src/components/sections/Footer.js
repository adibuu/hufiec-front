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
      color="white"
      rounded={"full"}
      w={10}
      h={10}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("primary.200", "primary.200"),
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
      bg={useColorModeValue("white", "white")}
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
          <SocialButton
            label={"Facebook"}
            href={"https://chakra-ui.com/docs/navigation/link"}
          >
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
