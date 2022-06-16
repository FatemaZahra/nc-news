import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderedArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const OrderArticle = () => {
  const { order } = useParams();
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getOrderedArticles(order)
      .then((articles) => {
        setCurrentArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [order]);

  if (isError) {
    return <p>An error occured! {isError.msg}</p>;
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
      <ul>
        {currentArticles.map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default OrderArticle;
