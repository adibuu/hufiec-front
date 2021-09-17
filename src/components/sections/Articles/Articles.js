import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import HtmlParser from "html-react-parser";

import Article from "./Article";
import { fetchArticles } from "../../../store/articlesActions";

const IMG = "https://cdn.wallpapersafari.com/12/75/QeySDc.jpg";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.results);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const articlesToShow = articles.map((a) => (
    <Article
      key={a._id}
      articleLink={`/aktualnosci/artykul/${a._id}`}
      title={a.title}
      subtitle={HtmlParser(a.preview)}
      image={a.imageURL || IMG}
      date={a.expireAt.split("T")[0]}
    />
  ));

  return loading ? (
    <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
  ) : (
    articlesToShow
  );
};

export default Articles;
