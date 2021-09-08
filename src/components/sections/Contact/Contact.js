import React from "react";
import { SimpleGrid, Flex, useColorModeValue } from "@chakra-ui/react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";

import FirstSection from "../../FirstSection";
import ContactData from "../../ContactData";
import MailTo from "../../../utils/MailTo";

const Contact = () => (
  <React.Fragment>
    <FirstSection
      title="Jeżeli masz jakieś pytania, chętnie udzielimy na nie odpowiedzi"
      image="https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    />
    <Flex
      p={20}
      mt="4rem"
      mb="4rem"
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
        <ContactData title="ADRES" icon={<FaLocationArrow />}>
          Mławska 22, 87-500 Rypin
        </ContactData>
        <ContactData title="TELEFON" icon={<FaPhone />}>
          500 600 700
        </ContactData>
        <ContactData title="EMAIL" icon={<FaEnvelope />}>
          <MailTo label="kontakt@hufiec.pl" mailto="mailto:kontakt@hufiec.pl" />
        </ContactData>
      </SimpleGrid>
    </Flex>
  </React.Fragment>
);

export default Contact;
