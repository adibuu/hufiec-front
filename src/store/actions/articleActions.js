import { articleActions } from "../slices/articleSlice";
import { uiActions } from "../slices/uiSlice";
import { articlesEndpoints } from "../../config/endpoints";
import fetchData from "../../utils/fetchData";

export const fetchArticle = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading(true));
    try {
      const articleData = await fetchData(articlesEndpoints.get + "/" + id);
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
