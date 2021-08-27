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
        "10rem 0 1rem 0",
        "10rem 0 1rem 0",
        "10rem 2rem 4rem 2rem",
        "10rem 5rem 5rem 5rem",
      ]}
      p="2rem"
    >
      <Flex>
        <Image
          src="https://www.tapeciarnia.pl/tapety/normalne/128434_jezioro_biwak_promienie.jpg"
          alt="Biwak"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          loading="lazy"
          rounded="lg"
          shadow="2xl"
          opacity="0.9"
        />
      </Flex>
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
          Nasza galeria jest dostępna wyłącznie dla zalogowanych posiadaczy kont
          e-ZHP Office365.
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
              color={useColorModeValue("white", "gray.300")}
              bg={useColorModeValue("primary.600", "primary.800")}
              transition={"background 0.3s ease"}
              _hover={{
                bg: useColorModeValue("primary.700", "primary.900"),
                color: useColorModeValue("white", "gray.400"),
              }}
            >
              PRZEJDŹ DO GALERII
            </Button>
          </Link>
        </Box>
      </Flex>
    </SimpleGrid>
  );
};

export default CTA;
