import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

import FlexTextButton from "../FlexTextButton";
import FlexImage from "../FlexImage";

const Gallery = () => (
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
    <FlexImage
      alt="Biwak"
      image="https://www.tapeciarnia.pl/tapety/normalne/128434_jezioro_biwak_promienie.jpg"
    />
    <FlexTextButton
      text="Nasza galeria jest dostępna wyłącznie dla zalogowanych posiadaczy kont e-ZHP Office365."
      buttonText="PRZEJDŹ DO GALERII"
      link="https://chakra-ui.com"
    />
  </SimpleGrid>
);

export default Gallery;
