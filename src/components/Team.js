import React from "react";
import { Flex, useColorModeValue, VStack, Stack, Text } from "@chakra-ui/react";

const Team = ({ name, image }) => (
  <Flex
    w={"100vw"}
    h={"100vh"}
    backgroundImage={image}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
    backgroundColor="gray.900"
    opacity="0.7"
    m={"2rem"}
    shadow="2xl"
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={{ base: 4, md: 8 }}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Stack maxW={"2xl"} align={"flex-start"} spacing={8}>
        <Text
          color={useColorModeValue("white", "gray.300")}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={{ base: "4xl", md: "5xl" }}
        >
          {name}
        </Text>
      </Stack>
    </VStack>
  </Flex>
);

export default Team;
