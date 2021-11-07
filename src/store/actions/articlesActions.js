import { articlesActions } from "../slices/articlesSlice";
import { uiActions } from "../slices/uiSlice";
import { articlesEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchArticles = (page, limit) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const articlesData = await fetchData(
        articlesEndpoints.get + `?page=${page}&limit=${limit}`
      );
      dispatch(
        articlesActions.setArticles({
          results: articlesData.results || [],
          nextPage: articlesData.next ? true : false,
          previousPage: articlesData.previous ? true : false,
          lastPageNumber: Math.ceil(articlesData.documentsAmount / limit),
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      dispatch(uiActions.setLoading(false));
      dispatch(uiActions.setError(true));
    }
  };
};
