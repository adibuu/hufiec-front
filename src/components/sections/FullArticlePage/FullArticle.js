import React from "react";
import { withRouter } from "react-router-dom";
import { Image, Stack, Heading, Box, Text, Center } from "@chakra-ui/react";

import BackButton from "../../BackButton";

class FullArticle extends React.PureComponent {
  render() {
    return (
      <Stack spacing={{ base: 5, sm: 6, md: 7 }} align="center" mb="2rem">
        <Stack
          direction={["column", "column", "row"]}
          spacing={["20px", "20px", "50px"]}
          mt="6rem"
        >
          <Center>
            <BackButton size="sm" width="100px" onClickBack={this.goBack} />
          </Center>
          <Text fontSize={{ base: "md", sm: "md", md: "xl" }} opacity="0.7">
            Opublikowano: {this.props.date}, {this.props.readingTime} min.
            czytania
          </Text>
        </Stack>
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign="center"
        >
          {this.props.title}
        </Heading>
        <Box w={{ base: "70%", sm: "40%", md: "40%" }}>
          <Image
            src={this.props.image}
            size="100%"
            width="100%"
            rounded="0.5rem"
            shadow="2xl"
          />
        </Box>
        <Box
          w={{ base: "80%", sm: "70%", md: "65%" }}
          textAlign="justify"
          fontSize="lg"
        >
          {this.props.content}
        </Box>
      </Stack>
    );
  }
}

export default withRouter(FullArticle);
