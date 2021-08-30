import React from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  useColorModeValue,
  VStack,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

const Team = ({ name, image, teamLink }) => (
  <Flex
    w={"90vw"}
    h={"80vh"}
    backgroundImage={image}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
    opacity="0.9"
    m={["5rem", "5rem", "5rem", "6rem"]}
    shadow="2xl"
    rounded="1rem"
    transform="scale(1.0)"
    transition="0.3s ease-in-out"
    _hover={{
      transform: "scale(1.01)",
    }}
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={{ base: 4, md: 8 }}
      rounded="1rem"
      bgGradient={"linear(to-r, blackAlpha.700, transparent)"}
    >
      <Stack maxW={"2xl"} align={"center"} spacing={5}>
        <Text
          color={useColorModeValue("white", "gray.300")}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={{ base: "5xl", md: "6xl" }}
        >
          {name}
        </Text>
        <Link to={teamLink}>
          <Button
            size="lg"
            fontWeight="medium"
            color={useColorModeValue("white", "gray.300")}
            bg={useColorModeValue("primary.700", "primary.800")}
            transition={"background 0.3s ease, transform 0.3s ease-in-out"}
            _hover={{
              bg: useColorModeValue("primary.500", "primary.700"),
              color: useColorModeValue("white", "gray.500"),
              transform: "scale(1.10)",
            }}
          >
            Poznaj nas!
          </Button>
        </Link>
      </Stack>
    </VStack>
  </Flex>
);

export default Team;
