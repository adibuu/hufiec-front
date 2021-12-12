import React, { useEffect } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-reveal/Zoom";

import FlexTextButton from "../FlexTextButton";
import FlexImage from "../FlexImage";
import { fetchDocuments } from "../../store/actions/documentsActions";

const Documents = () => {
  const dispatch = useDispatch();
  const documentsURL = useSelector((state) => state.documents.documentsURL);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);

  useEffect(() => {
    dispatch(fetchDocuments());
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
          <Zoom top>
            <FlexTextButton
              text="Strona z dokumentami dostępna jest wyłącznie dla zalogowanych posiadaczy kont e-ZHP Office365"
              buttonText="PRZEJDŹ DO DOKUMENTÓW"
              link={documentsURL}
            />
          </Zoom>
          <Zoom bottom>
            <FlexImage
              alt="Ognisko"
              image="https://cdn.pixabay.com/photo/2016/11/08/05/03/adventure-1807495_960_720.jpg"
            />
          </Zoom>
        </SimpleGrid>
      )}
    </>
  );
};
export default Documents;
