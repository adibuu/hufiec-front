import React from "react";
import {
  Image,
  Stack,
  Heading,
  Box,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const FullArticlePage = () => (
  <>
    <Stack spacing={{ base: 5, sm: 6, md: 7 }} align="center" mb="2rem">
      <Text
        mt="6rem"
        fontSize={{ base: "md", sm: "md", md: "xl" }}
        color={useColorModeValue("gray.900", "gray.300")}
        opacity="0.7"
      >
        Opublikowano: 18.09.2012, 13 min. czytania
      </Text>
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign="center"
      >
        Lorem ipsum dolor sit amet
      </Heading>
      <Box w={{ base: "70%", sm: "40", md: "40%" }}>
        <Image
          src="https://wallpaperaccess.com/full/1356048.jpg"
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
        <b>No dzien dobry ogułem </b>
        <p>
          Dictum non consectetur a erat. Netus et malesuada fames ac. Urna
          condimentum mattis pellentesque id nibh tortor id aliquet. Id diam vel
          quam elementum pulvinar. Maecenas volutpat blandit aliquam etiam.
        </p>
        <p>
          Tellus elementum sagittis vitae et leo duis ut diam. Vitae semper quis
          lectus nulla at volutpat diam. Vitae sapien pellentesque habitant
          morbi tristique senectus et netus et. Aenean pharetra magna ac
          placerat. Ullamcorper dignissim cras tincidunt lobortis feugiat. Sit
          amet dictum sit amet justo donec enim. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Cras pulvinar mattis nunc sed blandit
          libero. Nunc vel risus commodo viverra maecenas accumsan lacus vel
          facilisis. Tortor at auctor urna nunc id cursus metus.
        </p>
        <p>
          Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
          Volutpat ac tincidunt vitae semper quis. Venenatis tellus in metus
          vulputate eu scelerisque. Volutpat odio facilisis mauris sit amet
          massa vitae tortor condimentum. Et netus et malesuada fames ac. Mi
          ipsum faucibus vitae aliquet nec ullamcorper sit. Nunc non blandit
          massa enim nec. Dolor sit amet consectetur adipiscing elit.
        </p>
        <p>
          Vulputate odio ut enim blandit volutpat. Auctor urna nunc id cursus
          metus. Tincidunt eget nullam non nisi est. Interdum posuere lorem
          ipsum dolor sit amet consectetur adipiscing. Pharetra magna ac
          placerat vestibulum lectus mauris ultrices eros. Arcu dictum varius
          duis at. Neque viverra justo nec ultrices dui sapien eget mi. Massa
          vitae tortor condimentum lacinia quis vel eros donec ac. Praesent
          tristique magna sit amet purus. Blandit volutpat maecenas volutpat
          blandit aliquam etiam erat velit scelerisque.
        </p>
      </Box>
    </Stack>
  </>
);

export default FullArticlePage;
