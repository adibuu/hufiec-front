import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import HtmlParser from "html-react-parser";
import { Button, Center } from "@chakra-ui/react";
import { AiFillPrinter } from "react-icons/ai";

import FullArticle from "./FullArticle";

const FullArticlePage = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "HUFIEC",
    pageStyle: "@page: { margin-top: 25px; }",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = {
    readTime: "15",
    date: "06.09.2021",
    title: "Lorem ipsum dolor sit amet",
    image: "https://wallpaperaccess.com/full/1356048.jpg",
    content: `<b>No dzien dobry ogułem </b>
          <p>
            Dictum non consectetur a erat. Netus et malesuada fames ac. Urna
            condimentum mattis pellentesque id nibh tortor id aliquet. Id diam
            vel quam elementum pulvinar. Maecenas volutpat blandit aliquam
            etiam.
          </p>
          <p>
            Tellus elementum sagittis vitae et leo duis ut diam. Vitae semper
            quis lectus nulla at volutpat diam. Vitae sapien pellentesque
            habitant morbi tristique senectus et netus et. Aenean pharetra magna
            ac placerat. Ullamcorper dignissim cras tincidunt lobortis feugiat.
            Sit amet dictum sit amet justo donec enim. Vulputate sapien nec
            sagittis aliquam malesuada bibendum. Cras pulvinar mattis nunc sed
            blandit libero. Nunc vel risus commodo viverra maecenas accumsan
            lacus vel facilisis. Tortor at auctor urna nunc id cursus metus.
          </p>
          <p>
            Iaculis at erat pellentesque adipiscing commodo elit at imperdiet.
            Volutpat ac tincidunt vitae semper quis. Venenatis tellus in metus
            vulputate eu scelerisque. Volutpat odio facilisis mauris sit amet
            massa vitae tortor condimentum. Et netus et malesuada fames ac. Mi
            ipsum faucibus vitae aliquet nec ullamcorper sit. Nunc non blandit
            massa enim nec. Dolor sit amet consectetur adipiscing elit.
          </p>
          <p>
            Vulputate odio ut enim blandit volutpat. Auctor urna nunc id cursus
            metus. Tincidunt eget nullam non nisi est. Interdum posuere lorem
            ipsum dolor sit amet consectetur adipiscing. Pharetra magna ac
            placerat vestibulum lectus mauris ultrices eros. Arcu dictum varius
            duis at. Neque viverra justo nec ultrices dui sapien eget mi. Massa
            vitae tortor condimentum lacinia quis vel eros donec ac. Praesent
            tristique magna sit amet purus. Blandit volutpat maecenas volutpat
            blandit aliquam etiam erat velit scelerisque.
          </p>`,
  };

  return (
    <div>
      <FullArticle
        ref={componentRef}
        readTime={article.readTime}
        date={article.date}
        title={article.title}
        image={article.image}
        content={HtmlParser(article.content)}
      />
      <Center>
        <Button onClick={handlePrint} leftIcon={<AiFillPrinter />} shadow="md">
          Drukuj artykuł
        </Button>
      </Center>
    </div>
  );
};

export default FullArticlePage;
