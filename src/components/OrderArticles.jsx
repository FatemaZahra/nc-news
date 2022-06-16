import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderedArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const OrderArticle = () => {
  const { order } = useParams();
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrderedArticles(order).then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false);
    });
  }, [order]);

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
