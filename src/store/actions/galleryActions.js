import { galleryActions } from "../slices/gallerySlice";
import { uiActions } from "../slices/uiSlice";
import { galleryEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchGallery = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const galleryData = await fetchData(galleryEndpoints.get);
      dispatch(
        galleryActions.setGallery({
          galleryURL: galleryData[0].galleryURL,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
