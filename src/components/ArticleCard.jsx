import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArticleContext } from "../context/Article";
import { useContext } from "react";

const ArticleCard = ({ article }) => {
  const { setArticle } = useContext(ArticleContext);
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${article.article_id}`} className="link">
        <h2>
          {article.topic[0].toUpperCase() +
            article.topic.slice(1, article.length)}
        </h2>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
        <Button
          className="button"
          onClick={() => {
            setArticle(article);
          }}
        >
          Select this article
        </Button>
      </Link>
    </div>
  );
};
export default ArticleCard;
