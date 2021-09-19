import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import HtmlParser from "html-react-parser";
import { Button, Stack, Spacer } from "@chakra-ui/react";
import { AiFillPrinter } from "react-icons/ai";

import FullArticle from "./FullArticle";
import Share from "./Share";
import { fetchArticle } from "../../../store/article/articleActions";

const FullArticlePage = (props) => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article);
  const loading = useSelector((state) => state.ui.loading);
  const { id } = props.match.params;
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
        readTime={article.readTime || "0"}
        date={article.date.split("T")[0]}
        title={article.title}
        image={article.imageURL}
        content={HtmlParser(article.content)}
      />
      <Stack direction={["column", "row"]} spacing="24px">
        <Share />
        <Spacer />
        <Button onClick={handlePrint} leftIcon={<AiFillPrinter />} shadow="md">
          Drukuj artykuł
        </Button>
      </Stack>
    </React.Fragment>
  );
};

export default FullArticlePage;
