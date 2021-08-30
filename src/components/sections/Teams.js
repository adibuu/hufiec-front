import { Box } from "@chakra-ui/react";
import React from "react";
import Team from "../Team";

const Teams = () => {
  const teams = [
    {
      id: "1",
      name: "Kapituła Stopni Wędrowniczych",
      image:
        "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
    },
    {
      id: "2",
      name: "Komisja Stopni Instruktorskich",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    },
    {
      id: "3",
      name: "Komisja Rewizyjna",
      image:
        "https://images.unsplash.com/photo-1494825514961-674db1ac2700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
      id: "4",
      name: "Zespół Komunikacji i Promocji",
      image:
        "https://images.unsplash.com/photo-1456030680012-9aa5bd962cc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  ];

  const teamsToShow = teams.map((t) => (
    <>
      <Team
        key={t.id}
        name={t.name}
        image={t.image}
        teamLink={"/druzyny/" + t.id}
      />
      <Box
        rounded="md"
        backgroundColor="primary.800"
        w="60vw"
        h="5px"
        shadow="2xl"
      />
    </>
  ));

  return <React.Fragment>{teamsToShow}</React.Fragment>;
};

export default Teams;
