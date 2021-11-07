import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Pulse from "react-reveal/Pulse";

const Error = () => (
  <Pulse>
    <Box
      mt={["10rem", "15rem"]}
      mb={["10rem", "15rem"]}
      shadow="2xl"
      rounded="2xl"
      w={["90vw", "80vw"]}
      p={10}
    >
      <Text fontSize={["5xl", "6xl"]} fontWeight="bold" color={"primary.900"}>
        Coś poszło nie tak, spróbuj ponownie później...
      </Text>
    </Box>
  </Pulse>
);

export default Error;
