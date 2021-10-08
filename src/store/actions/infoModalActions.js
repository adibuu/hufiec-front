import { infoModalActions } from "../slices/infoModalSlice";
import { uiActions } from "../slices/uiSlice";
import { infoModalEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchInfoModal = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const infoModalData = await fetchData(infoModalEndpoints.get);
      dispatch(
        infoModalActions.setInfoModal({
          show: infoModalData[0].show || false,
          content: infoModalData[0].content || "",
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
