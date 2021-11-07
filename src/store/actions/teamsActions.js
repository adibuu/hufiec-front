import { teamsActions } from "../slices/teamsSlice";
import { uiActions } from "../slices/uiSlice";
import { teamsEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchTeams = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const teamsData = await fetchData(teamsEndpoints.get);
      dispatch(
        teamsActions.setTeams({
          results: teamsData,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      dispatch(uiActions.setLoading(false));
      dispatch(uiActions.setError(true));
    }
  };
};
