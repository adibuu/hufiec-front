import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";

const SocialButton = ({ children, label, href }) => (
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

export default SocialButton;
