import React, { useEffect } from "react";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import FlexTextButton from "../FlexTextButton";
import FlexImage from "../FlexImage";
import { fetchDocuments } from "../../store/actions/documentsActions";

const Documents = () => {
  const dispatch = useDispatch();
  const documentsURL = useSelector((state) => state.documents.documentsURL);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchDocuments());
  }, [dispatch]);

  return loading ? (
    <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
  ) : (
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
      <FlexTextButton
        text="Strona z dokumentami dostępna jest wyłącznie dla zalogowanych posiadaczy kont e-ZHP Office365"
        buttonText="PRZEJDŹ DO DOKUMENTÓW"
        link={documentsURL}
      />
      <FlexImage
        alt="Ognisko"
        image="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
    </SimpleGrid>
  );
};
export default Documents;
