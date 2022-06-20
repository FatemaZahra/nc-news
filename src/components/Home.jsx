import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Home = () => {
  const [currentArticles, setCurrentArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);
  const [page, setPage] = useState(12);

  const loadMoreCards = () => {
    setPage((preValue) => preValue + 6);
  };

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setCurrentArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, []);

  if (isError) {
    return <p>{isError.msg}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <ul className="articles">
        {currentArticles.slice(0, page).map((article) => {
          return (
            <div key={article.article_id}>
              <ArticleCard article={article} />
            </div>
          );
        })}
        <Button className="load_more" onClick={loadMoreCards}>
          {page < currentArticles.length
            ? "Load More"
            : "Loaded all articles successfully"}
        </Button>
      </ul>
    </>
  );
};

export default Home;
