import { useSearchParams, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSortedArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const SortArticle = () => {
  const { sort_by } = useParams();
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSortedArticles(sort_by).then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false);
    });
  }, [sort_by]);

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

export default SortArticle;
