import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  Spinner,
  Button,
  useRadioGroup,
  HStack,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import HtmlParser from "html-react-parser";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Article from "./Article";
import { fetchArticles } from "../../../store/actions/articlesActions";
import { defaultArticleImage } from "../../../config/defaultData";
import InfoModal from "../../InfoModal";
import RadioCard from "../../RadioCard";

const Articles = (props) => {
  const {
    match: {
      params: { pageNumber },
    },
  } = props;
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.results);
  const nextPage = useSelector((state) => state.articles.nextPage);
  const previousPage = useSelector((state) => state.articles.previousPage);
  const lastPageNumber = useSelector((state) => state.articles.lastPageNumber);
  const loading = useSelector((state) => state.ui.loading);
  const modal = useSelector((state) => state.infoModal);
  const [currentPage, setCurrentPage] = useState(
    pageNumber ? Number.parseInt(pageNumber) : 1
  );
  const [limitArticlesPerPage, setLimitArticlesPerPage] = useState(5);
  const history = useHistory();
  const limitPerPageOption = ["5", "10", "15"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "limitPerPageOptions",
    defaultValue: limitPerPageOption[0],
    onChange: (value) => {
      setLimitArticlesPerPage(value);
      setCurrentPage(1);
    },
  });
  const group = getRootProps();

  useEffect(() => {
    dispatch(fetchArticles(currentPage, limitArticlesPerPage));
    if (currentPage < 0 || lastPageNumber !== 0) {
      if (currentPage <= lastPageNumber && currentPage >= 0) {
        history.push(`/aktualnosci/${currentPage}`);
      } else {
        setCurrentPage(1);
        history.push(`/aktualnosci/1`);
      }
    }
  }, [dispatch, currentPage, limitArticlesPerPage, history, lastPageNumber]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const articlesToShow = articles.map((a) => (
    <Article
      key={a._id}
      articleLink={`/aktualnosci/artykul/${a._id}`}
      title={a.title}
      subtitle={HtmlParser(a.preview)}
      image={a.imageURL || defaultArticleImage}
      date={a.expireAt.split("T")[0]}
    />
  ));

  if (!currentPage <= lastPageNumber && !currentPage > 0) {
    setCurrentPage(1);
  }

  let nextPageButton = null;
  let previousPageButton = null;

  if (previousPage) {
    previousPageButton = (
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        color="primary.800"
        borderColor="primary.800"
        _hover={{
          bgColor: "primary.700",
          color: "white",
          borderColor: "primary.700",
        }}
        variant="outline"
        shadow="sm"
        leftIcon={<FaChevronLeft />}
      >
        Poprzednia strona
      </Button>
    );
  }

  if (nextPage) {
    nextPageButton = (
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        color="primary.800"
        borderColor="primary.800"
        _hover={{
          bgColor: "primary.700",
          color: "white",
          borderColor: "primary.700",
        }}
        variant="outline"
        shadow="sm"
        rightIcon={<FaChevronRight />}
      >
        Następna strona
      </Button>
    );
  }

  const navButtons = (
    <Stack direction={["column", "row"]} spacing={5} p={50}>
      {previousPageButton}
      {nextPageButton}
    </Stack>
  );

  return (
    <>
      {modal.show ? <InfoModal /> : null}
      <SimpleGrid columns={{ sm: 1, md: 2 }} mt={["5rem", "7rem"]}>
        <Text
          fontWeight="bold"
          color={"primary.900"}
          fontSize={["md", "lg"]}
          m={"auto"}
        >
          Wybierz ilość artykułów na stronie:
        </Text>
        <HStack {...group} m={"auto"} ml={["auto", "5"]} mt={["3", "0"]}>
          {limitPerPageOption.map((value) => (
            <RadioCard key={value} {...getRadioProps({ value })}>
              {value}
            </RadioCard>
          ))}
        </HStack>
      </SimpleGrid>
      {loading ? (
        <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
      ) : (
        <React.Fragment>
          {articlesToShow}
          {navButtons}
        </React.Fragment>
      )}
    </>
  );
};

export default Articles;
