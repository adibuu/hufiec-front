import { teamsActions } from "../slices/teamsSlice";
import { uiActions } from "../slices/uiSlice";
import { teamsEndpoints } from "../../config/endpoints";

export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));

    const fetchData = async () => {
      const response = await fetch(teamsEndpoints.get);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const teamsData = await fetchData();
      dispatch(
        teamsActions.setTeams({
          results: teamsData,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
