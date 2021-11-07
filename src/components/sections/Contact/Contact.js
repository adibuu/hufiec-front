import React, { useEffect } from "react";
import { SimpleGrid, Flex, Spinner } from "@chakra-ui/react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";

import FirstSection from "../../FirstSection";
import ContactData from "../../ContactData";
import MailTo from "../../../utils/MailTo";
import { useSelector } from "react-redux";

const Contact = () => {
  const contact = useSelector((state) => state.contact);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {loading && (
        <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
      )}
      {!error && !loading && (
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
              shadow="dark-lg"
            >
              <ContactData title="ADRES" icon={<FaLocationArrow />}>
                {contact.address.street +
                  ", " +
                  contact.address.postCode +
                  " " +
                  contact.address.city}
              </ContactData>
              <ContactData title="TELEFON" icon={<FaPhone />}>
                {contact.phone}
              </ContactData>
              <ContactData title="EMAIL" icon={<FaEnvelope />}>
                <MailTo
                  label={contact.email}
                  mailto={"mailto:" + contact.email}
                />
              </ContactData>
            </SimpleGrid>
          </Flex>
        </React.Fragment>
      )}
    </>
  );
};

export default Contact;
