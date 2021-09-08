import React from "react";
import { Center, Icon, useColorModeValue, Text } from "@chakra-ui/react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import { FaFacebook, FaEnvelope, FaTwitter } from "react-icons/fa";

const Share = () => (
  <React.Fragment>
    <Center>
      <Text fontSize={{ base: "md", sm: "md", md: "xl" }} opacity="0.7">
        Udostępnij:
      </Text>
    </Center>
    <EmailShareButton url={window.location.href}>
      <Icon
        as={FaEnvelope}
        w={8}
        h={8}
        color={"primary.800"}
        transition={"color 0.3s ease"}
        _hover={{
          color: useColorModeValue("primary.200", "primary.600"),
        }}
      />
    </EmailShareButton>
    <FacebookShareButton url={window.location.href}>
      <Icon
        as={FaFacebook}
        w={8}
        h={8}
        color={"primary.800"}
        transition={"color 0.3s ease"}
        _hover={{
          color: useColorModeValue("primary.200", "primary.600"),
        }}
      />
    </FacebookShareButton>
    <TwitterShareButton url={window.location.href}>
      <Icon
        as={FaTwitter}
        w={8}
        h={8}
        color={"primary.800"}
        transition={"color 0.3s ease"}
        _hover={{
          color: useColorModeValue("primary.200", "primary.600"),
        }}
      />
    </TwitterShareButton>
  </React.Fragment>
);

export default Share;
