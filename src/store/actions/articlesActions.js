import { articlesActions } from "../slices/articlesSlice";
import { uiActions } from "../slices/uiSlice";
import { articlesEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchArticles = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const articlesData = await fetchData(articlesEndpoints.get);
      dispatch(
        articlesActions.setArticles({
          documentsAmount: articlesData.documentsAmount || 0,
          results: articlesData.results || [],
        })
      );
      dispatch(uiActions.setLoading(false));
      dispatch(uiActions.setFooter(true));
    } catch (error) {
      console.log(error);
    }
  };
};
