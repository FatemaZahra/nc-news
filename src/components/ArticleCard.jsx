import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="ArticleCard">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.topic}</h2>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};
export default ArticleCard;
