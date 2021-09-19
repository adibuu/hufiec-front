import React, { Fragment, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import Team from "./Team";
import { fetchTeams } from "../../../store/actions/teamsActions";

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.results);
  const loading = useSelector((state) => state.ui.loading);

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const teamsToShow = teams.map((t) => (
    <Fragment key={t._id}>
      <Team name={t.name} image={t.photoURL} teamLink={"/druzyny/" + t._id} />
      <Box
        rounded="md"
        backgroundColor="primary.800"
        w="60vw"
        h="5px"
        shadow="2xl"
      />
    </Fragment>
  ));

  return loading ? (
    <Spinner size="xl" color="primary.800" mt="25rem" mb="30rem" />
  ) : (
    teamsToShow
  );
};

export default Teams;
