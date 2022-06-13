import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then((articles) => {
      setCurrentArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
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

export default Home;
