import React from "react";

import Article from "./Article";

const Articles = () => {
  const articles = [
    {
      id: "1",
      title: "Test artykułu 1",
      preview:
        "of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image:
        "https://www.barnardandwestwood.com/wp-content/uploads/2014/09/Forrest-Free-HQ-Background-5_1030x690.jpg",
      date: Date.now(),
    },
    {
      id: "2",
      title: "Test artykułu 2",
      preview:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://cdn.wallpapersafari.com/12/75/QeySDc.jpg",
      date: Date.now(),
    },
    {
      id: "3",
      title: "Test artykułu 3",
      preview:
        "atin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image:
        "https://andreaskunzphotography.com/wp-content/uploads/2018/07/autumn-forrest-with-farns-and-river-2560-hq-1030x686.jpg",
      date: Date.now(),
    },
    {
      id: "4",
      title: "Test artykułu 4",
      preview: "To jest artykuł o niczym ale to jest test artykułu 4",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image:
        "https://www.barnardandwestwood.com/wp-content/uploads/2014/09/Forrest-Free-HQ-Background-5_1030x320.jpg",
      date: Date.now(),
    },
  ];

  const articlesToShow = articles.map((a) => (
    <Article
      key={a.id}
      articleLink={"/aktualnosci/" + a.id}
      title={a.title}
      subtitle={a.preview}
      image={a.image}
      date={a.date}
    />
  ));

  return <React.Fragment>{articlesToShow}</React.Fragment>;
};

export default Articles;
