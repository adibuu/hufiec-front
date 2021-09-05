import React from "react";

import Article from "./Article";

const Articles = () => {
  const articles = [
    {
      id: "1",
      title: "Suspendisse potenti. Nulla imperdiet nulla magna.",
      preview:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium velit eget lobortis placerat. Nulla a ante sed ante scelerisque tincidunt in id mauris. Pellentesque nec risus massa. Phasellus quis.</p>",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image:
        "https://www.barnardandwestwood.com/wp-content/uploads/2014/09/Forrest-Free-HQ-Background-5_1030x690.jpg",
      date: Date.now(),
    },
    {
      id: "2",
      title: "Vivamus pharetra, nunc eget consectetur pharetra",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium velit eget lobortis placerat. Nulla a ante sed ante scelerisque tincidunt in id mauris. Pellentesque nec risus massa. Phasellus quis.",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image: "https://cdn.wallpapersafari.com/12/75/QeySDc.jpg",
      date: Date.now(),
    },
    {
      id: "3",
      title: "Where can I get some?",
      preview:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium velit eget lobortis placerat. Nulla a ante sed ante scelerisque tincidunt in id mauris. Pellentesque nec risus massa. Phasellus quis.",
      content:
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      image:
        "https://andreaskunzphotography.com/wp-content/uploads/2018/07/autumn-forrest-with-farns-and-river-2560-hq-1030x686.jpg",
      date: Date.now(),
    },
    {
      id: "4",
      title: "What is Lorem Ipsum?",
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
      articleLink={`/aktualnosci/artykul/${a.id}`}
      title={a.title}
      subtitle={a.preview}
      image={a.image}
      date={a.date}
    />
  ));

  return <React.Fragment>{articlesToShow}</React.Fragment>;
};

export default Articles;
