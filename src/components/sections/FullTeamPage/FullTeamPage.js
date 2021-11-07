import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, SimpleGrid, Link, Spinner, Center } from "@chakra-ui/react";
import HtmlParser from "html-react-parser";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import Fade from "react-reveal/Fade";

import MailTo from "../../../utils/MailTo";
import FirstSection from "../../FirstSection";
import ContactData from "../../ContactData";
import { fetchTeam } from "../../../store/actions/teamActions";

const FullTeamPage = (props) => {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
  const { id } = props.match.params;

  useEffect(() => {
    dispatch(fetchTeam(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && (
        <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
      )}
      {!error && !loading && (
        <React.Fragment>
          <Fade top>
            <FirstSection title={team.name} image={team.photoURL} />
          </Fade>
          <Fade bottom>
            <Center>
              <Box
                w={{ base: "80%", sm: "70%", md: "65%" }}
                mt="3rem"
                mb="3rem"
                textAlign="justify"
                fontSize="lg"
              >
                {HtmlParser(team.description)}
              </Box>
            </Center>
          </Fade>
          <Fade>
            <Flex
              p={20}
              mt="2rem"
              mb="2rem"
              w="auto"
              justifyContent="center"
              alignItems="center"
            >
              <SimpleGrid
                columns={{ base: 1, md: 4, lg: 4 }}
                spacing={20}
                px={{ base: 4, lg: 16, xl: 24 }}
                py={20}
                mx="auto"
                shadow="dark-lg"
              >
                <ContactData title="TELEFON" icon={<FaPhone />}>
                  {team.contact.phone}
                </ContactData>
                <ContactData title="EMAIL" icon={<FaEnvelope />}>
                  <MailTo
                    label={team.contact.email}
                    mailto={"mailto:" + team.contact.email}
                  />
                </ContactData>
                <ContactData title="FACEBOOK" icon={<FaFacebook />}>
                  <Link
                    href={team.contact.facebookURL}
                    isExternal
                    style={{ textDecoration: "none" }}
                  >
                    {team.name}
                  </Link>
                </ContactData>
                <ContactData title="INSTAGRAM" icon={<FaInstagram />}>
                  <Link
                    href={team.contact.instagramURL}
                    isExternal
                    style={{ textDecoration: "none" }}
                  >
                    {team.name}
                  </Link>
                </ContactData>
              </SimpleGrid>
            </Flex>
          </Fade>
        </React.Fragment>
      )}
    </>
  );
};

export default FullTeamPage;
