import { useEffect, useState } from "react";
import { getArticleById } from "../utils/api";
import { useParams } from "react-router-dom";
import ArticleCardByArticleId from "./ArticleCardByArticleId";

const ArticleByArticleId = () => {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setCurrentArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <h1>
        <ArticleCardByArticleId currentArticle={currentArticle} />
      </h1>
    </>
  );
};
export default ArticleByArticleId;
