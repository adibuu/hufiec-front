import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";

const CTA = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      margin={[
        "2rem 0 1rem 0",
        "2rem 0 1rem 0",
        "10rem 2rem 4rem 2rem",
        "10rem 5rem 5rem 5rem",
      ]}
      p="2rem"
    >
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.h1
          mb={4}
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
          color={useColorModeValue("primary.600", "gray.300")}
          lineHeight="shorter"
        >
          Strona z dokumentami dostępna jest wyłącznie dla zalogowanych
          posiadaczy kont e-ZHP Office365
        </chakra.h1>
        <Box display="inline-flex" rounded="md" shadow="md">
          <Link
            href="https://chakra-ui.com"
            isExternal
            style={{ textDecoration: "none" }}
          >
            <Button
              size="lg"
              fontWeight="bold"
              color={useColorModeValue("white")}
              bg={useColorModeValue("primary.600", "primary.500")}
              _hover={{
                bg: useColorModeValue("primary.700", "primary.600"),
              }}
            >
              PRZEJDŹ DO DOKUMENTÓW
            </Button>
          </Link>
        </Box>
      </Flex>
      <Flex>
        <Image
          src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Ognisko"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          loading="lazy"
          rounded="lg"
          shadow="2xl"
          opacity="0.9"
        />
      </Flex>
    </SimpleGrid>
  );
};

export default CTA;
