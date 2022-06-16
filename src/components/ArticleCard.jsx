import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArticleContext } from "../context/Article";
import { useContext } from "react";

const ArticleCard = ({ article }) => {
  const { setArticle } = useContext(ArticleContext);
  return (
    <div className="ArticleCard">
      <h2>
        {article.topic[0].toUpperCase() +
          article.topic.slice(1, article.length)}
      </h2>
      <h1>{article.title}</h1>
      <h3>{article.author}</h3>
      <span>
        <time className="date">{article.created_at.slice(0, 10)}, </time>
        <time className="date">{article.created_at.slice(11, 16)}</time>
      </span>
      <p>{article.body}</p>
      <h5>Comment count:{article.comment_count}</h5>
      <h5>Vote count:{article.votes}</h5>
      <Link to={`/articles/${article.article_id}`} className="link">
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
