import React from "react";
import { Flex, useColorModeValue, VStack, Stack, Text } from "@chakra-ui/react";

const FirstSection = () => (
  <Flex
    w={"100vw"}
    h={"55vh"}
    backgroundImage={
      "url(https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
    }
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
    backgroundAttachment={"fixed"}
    backgroundBlendMode={"overlay"}
    backgroundColor="gray.700"
    opacity="0.9"
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
          Jeżeli masz jakieś pytania, chętnie udzielimy na nie odpowiedzi
        </Text>
      </Stack>
    </VStack>
  </Flex>
);

export default FirstSection;
