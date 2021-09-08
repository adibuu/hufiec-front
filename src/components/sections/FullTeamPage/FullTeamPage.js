import React, { useEffect } from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import HtmlParser from "html-react-parser";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

import MailTo from "../../../utils/MailTo";
import FirstSection from "../../FirstSection";
import ContactData from "../../ContactData";

const FullTeamPage = () => {
  const teamToShow = {
    name: "Kapituła Stopni Wędrowniczych",
    description: `<h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
    <br />
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    1914 translation by H. Rackham</p>
    <br />
    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
    <br />
    <h3>At vero eos et accusamus et iusto odio dignissimos ducimus</h3>
    <p>Qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    1914 translation by H. Rackham</p>
    <br />
    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>`,
    contact: {
      email: "druzyna@zhp.pl",
      phone: "888 999 777",
      facebookURL: "https://chakra-ui.com",
      instagramURL: "https://chakra-ui.com",
    },
    photosURL: [
      "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
      "https://images.unsplash.com/photo-1547140741-00d6fd251528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
      "https://images.unsplash.com/photo-1495605872451-ec35b8f0ddc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80",
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <FirstSection title={teamToShow.name} image={teamToShow.photosURL[0]} />
      <Box
        w={{ base: "80%", sm: "70%", md: "65%" }}
        mt="3rem"
        mb="3rem"
        textAlign="justify"
        fontSize="lg"
      >
        {HtmlParser(teamToShow.description)}
      </Box>
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
          bg={useColorModeValue("white", "gray.800")}
          shadow="dark-lg"
        >
          <ContactData title="TELEFON" icon={<FaPhone />}>
            {teamToShow.contact.phone}
          </ContactData>
          <ContactData title="EMAIL" icon={<FaEnvelope />}>
            <MailTo
              label={teamToShow.contact.email}
              mailto={"mailto:" + teamToShow.contact.email}
            />
          </ContactData>
          <ContactData title="FACEBOOK" icon={<FaFacebook />}>
            <Link
              href={teamToShow.contact.facebookURL}
              isExternal
              style={{ textDecoration: "none" }}
            >
              {teamToShow.name}
            </Link>
          </ContactData>
          <ContactData title="INSTAGRAM" icon={<FaInstagram />}>
            <Link
              href={teamToShow.contact.instagramURL}
              isExternal
              style={{ textDecoration: "none" }}
            >
              {teamToShow.name}
            </Link>
          </ContactData>
        </SimpleGrid>
      </Flex>
    </React.Fragment>
  );
};

export default FullTeamPage;
