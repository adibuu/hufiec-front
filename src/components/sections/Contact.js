import React from "react";
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
  VStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import MailTo from "../../utils/MailTo";

export default function S3c() {
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={24}
          color={useColorModeValue("primary.700", "gray.300")}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
        <chakra.h3
          mb={3}
          fontSize="xl"
          lineHeight="shorter"
          fontWeight="bold"
          color={useColorModeValue("gray.900", "gray.300")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          fontSize="lg"
          fontWeight="bolder"
          color={useColorModeValue("gray.600", "gray.400")}
          transition={"color 0.3s ease"}
          _hover={{
            color: "primary.800",
          }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  const FirstSection = () => (
    <Flex
      w={"100vw"}
      h={"100vh"}
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

  return (
    <React.Fragment>
      <FirstSection />
      <Flex
        p={20}
        mt="5rem"
        mb="5rem"
        w="auto"
        justifyContent="center"
        alignItems="center"
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={20}
          px={{ base: 4, lg: 16, xl: 24 }}
          py={20}
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="dark-lg"
        >
          <Feature title="ADRES" icon={<FaLocationArrow />}>
            Mławska 22, 87-500 Rypin
          </Feature>
          <Feature title="TELEFON" icon={<FaPhone />}>
            500 600 700
          </Feature>
          <Feature title="EMAIL" icon={<FaEnvelope />}>
            <MailTo
              label="kontakt@hufiec.pl"
              mailto="mailto:kontakt@hufiec.pl"
            />
          </Feature>
        </SimpleGrid>
      </Flex>
      <div style={{ width: "100vw" }}>
        <iframe
          title="map"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Rypin,%20Wojska%20Polskiego+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </React.Fragment>
  );
}
