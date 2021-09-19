import { articleActions } from "../slices/articleSlice";
import { uiActions } from "../slices/uiSlice";
import { articlesEndpoints } from "../../config/endpoints";

export const fetchArticle = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));

    const fetchData = async () => {
      const response = await fetch(articlesEndpoints.get + "/" + id);

      if (!response.ok) {
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const articleData = await fetchData();
      dispatch(
        articleActions.setArticle({
          title: articleData.title,
          content: articleData.content,
          imageURL: articleData.imageURL,
          filesURL: articleData.filesURL,
          date: articleData.expireAt,
        })
      );
      dispatch(uiActions.setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};
