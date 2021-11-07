import React, { useEffect } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Slide from "react-reveal/Slide";

import FlexTextButton from "../FlexTextButton";
import FlexImage from "../FlexImage";
import { fetchGallery } from "../../store/actions/galleryActions";

const Gallery = () => {
  const dispatch = useDispatch();
  const galleryURL = useSelector((state) => state.gallery.galleryURL);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    dispatch(fetchGallery());
  }, [dispatch]);

  return (
    <>
      {loading && (
        <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
      )}
      {!error && !loading && (
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
          <Slide left>
            <FlexImage
              alt="Biwak"
              image="https://www.tapeciarnia.pl/tapety/normalne/128434_jezioro_biwak_promienie.jpg"
            />
          </Slide>
          <Slide right>
            <FlexTextButton
              text="Nasza galeria jest dostępna wyłącznie dla zalogowanych posiadaczy kont e-ZHP Office365."
              buttonText="PRZEJDŹ DO GALERII"
              link={galleryURL}
            />
          </Slide>
        </SimpleGrid>
      )}
    </>
  );
};

export default Gallery;
