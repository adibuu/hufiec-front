import { documentsActions } from "../slices/documentsSlice";
import { uiActions } from "../slices/uiSlice";
import { documentsEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchDocuments = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const documentsData = await fetchData(documentsEndpoints.get);
      dispatch(
        documentsActions.setDocuments({
          documentsURL: documentsData[0].documentsURL,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      dispatch(uiActions.setLoading(false));
      dispatch(uiActions.setError(true));
    }
  };
};
