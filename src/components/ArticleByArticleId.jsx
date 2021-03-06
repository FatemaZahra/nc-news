import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import ArticleCardByArticleId from "./ArticleCardByArticleId";

const ArticleByArticleId = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setCurrentArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [article_id]);

  if (isError) {
    return <p>{isError.msg}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <span class="material-symbols-outlined">hourglass_top</span>Loading...
      </p>
    );
  }
  return (
    <>
      <ArticleCardByArticleId currentArticle={currentArticle} />
    </>
  );
};
export default ArticleByArticleId;
