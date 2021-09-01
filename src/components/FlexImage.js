import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const FlexImage = ({ alt, image }) => (
  <Flex>
    <Image
      src={image}
      alt={alt}
      fit="cover"
      w="full"
      h={{ base: 64, md: "full" }}
      mt={{ base: "2rem", md: 0, lg: 0 }}
      rounded="lg"
      shadow="2xl"
      opacity="0.9"
    />
  </Flex>
);

export default FlexImage;
