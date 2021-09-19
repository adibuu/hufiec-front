import { articlesActions } from "./articlesSlice";
import { uiActions } from "../ui/uiSlice";
import { articlesEndpoints } from "../../config/endpoints";

export const fetchArticles = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));

    const fetchData = async () => {
      const response = await fetch(articlesEndpoints.get);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const articlesData = await fetchData();
      dispatch(
        articlesActions.getArticles({
          documentsAmount: articlesData.documentsAmount || 0,
          results: articlesData.results || [],
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
