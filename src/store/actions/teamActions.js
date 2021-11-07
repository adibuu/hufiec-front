import { teamActions } from "../slices/teamSlice";
import { uiActions } from "../slices/uiSlice";
import { teamsEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchTeam = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const teamData = await fetchData(teamsEndpoints.get + "/" + id);
      dispatch(
        teamActions.setTeam({
          name: teamData.name,
          description: teamData.description,
          contact: {
            phone: teamData.contact.phone,
            email: teamData.contact.email,
            facebookURL: teamData.contact.facebookURL,
            instagramURL: teamData.contact.instagramURL,
          },
          photoURL: teamData.photoURL,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      dispatch(uiActions.setLoading(false));
      dispatch(uiActions.setError(true));
    }
  };
};
