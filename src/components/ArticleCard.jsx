import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ArticleContext } from "../context/Article";
import { useContext } from "react";
import ReadMore from "./ReadMore";

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
      <p>
        <ReadMore>{article.body}</ReadMore>
      </p>
      <h5>💬 {article.comment_count} comments</h5>
      <h5>👍 {article.votes} votes </h5>
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
