import { articlesActions } from "./articlesSlice";
import { uiActions } from "./uiSlice";

export const fetchArticles = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));

    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/posts");

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      console.log(data);

      return data;
    };

    try {
      const articlesData = await fetchData();
      dispatch(
        articlesActions.updateArticles({
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
