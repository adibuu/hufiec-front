import { Box } from "@chakra-ui/react";
import React from "react";
import Team from "../Team";

const Teams = () => {
  const teams = [
    {
      id: "1",
      name: "Zieloni",
      image:
        "https://s3.amazonaws.com/trooptrack-prod/srv/www/trooptrack_web/releases/20150918120949/public/ckeditor_assets/pictures/5181/content_coh.jpg",
    },
    {
      id: "2",
      name: "Niebiescy",
      image:
        "https://lh3.googleusercontent.com/proxy/YxFNBg4I1pP3TCPtmU8WF5QgzampTN-TbI-k8HM8SZfROkKNpEa25HUzsDgNjbHrWGa2Cx4xxyGW-hsi1s1-1XOhVf5dNXGRkGQvkEFYQl040S7orcGfibsktYeRc-WbHyI",
    },
    {
      id: "3",
      name: "Czerwoni",
      image:
        "http://thenews-ia.com/uploads/original/20201014-122716-1015A09-KAL-boy%20scouts%20group.jpg",
    },
    {
      id: "4",
      name: "Czarni",
      image:
        "https://i1.wp.com/blog.scoutingmagazine.org/wp-content/uploads/sites/2/2020/03/Troop-223-Western-Los-Angeles-County-Council.jpg?fit=1200%2C630&ssl=1",
    },
  ];

  const teamsToShow = teams.map((t) => (
    <>
      <Team key={t.id} name={t.name} image={t.image} />
      <Box
        rounded="md"
        backgroundColor="primary.800"
        w="90vw"
        h="5px"
        shadow="2xl"
      />
    </>
  ));

  return <React.Fragment>{teamsToShow}</React.Fragment>;
};

export default Teams;
