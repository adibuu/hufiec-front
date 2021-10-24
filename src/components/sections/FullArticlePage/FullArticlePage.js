import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import HtmlParser from "html-react-parser";
import { Button, Stack, Spacer } from "@chakra-ui/react";
import { AiFillPrinter } from "react-icons/ai";

import FullArticle from "./FullArticle";
import Share from "./Share";
import BackButton from "../../BackButton";
import { fetchArticle } from "../../../store/actions/articleActions";

const FullArticlePage = (props) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const loading = useSelector((state) => state.ui.loading);
  const { id } = props.match.params;
  const componentRef = useRef();
  const history = useHistory();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(fetchArticle(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return loading ? (
    <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
  ) : (
    <React.Fragment>
      <FullArticle
        ref={componentRef}
        readingTime={article.readingTime}
        date={article.date.split("T")[0]}
        title={article.title}
        image={article.imageURL}
        content={HtmlParser(article.content)}
      />
      <Stack direction={["column", "row"]} spacing="24px">
        <BackButton goBackClick={goBack} />
        <Share />
        <Spacer />
        <Button
          onClick={handlePrint}
          leftIcon={<AiFillPrinter />}
          shadow="md"
          colorScheme="whatsapp"
        >
          Drukuj artykuł
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default FullArticlePage;
