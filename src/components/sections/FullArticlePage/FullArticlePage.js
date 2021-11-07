import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import HtmlParser from "html-react-parser";
import { Button, Stack, Spacer } from "@chakra-ui/react";
import { AiFillPrinter } from "react-icons/ai";
import Fade from "react-reveal/Fade";

import FullArticle from "./FullArticle";
import Share from "./Share";
import BackButton from "../../BackButton";
import { fetchArticle } from "../../../store/actions/articleActions";
import { defaultArticleImage } from "../../../config/defaultData";

const FullArticlePage = (props) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const loading = useSelector((state) => state.ui.loading);
  const error = useSelector((state) => state.ui.error);
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

  return (
    <>
      {loading && (
        <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
      )}
      {!error && !loading && (
        <Fade>
          <FullArticle
            ref={componentRef}
            readingTime={article.readingTime}
            date={article.date.split("T")[0]}
            title={article.title}
            image={article.imageURL || defaultArticleImage}
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
              variant="outline"
              color="primary.800"
              borderColor="primary.800"
              _hover={{
                bgColor: "primary.700",
                color: "white",
                borderColor: "primary.700",
              }}
            >
              Drukuj artykuł
            </Button>
          </Stack>
        </Fade>
      )}
    </>
  );
};

export default FullArticlePage;
