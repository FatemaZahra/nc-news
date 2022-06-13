const ArticleCard = ({ article }) => {
  return (
    <div className="ArticleCard">
      <h2>{article.topic}</h2>
      <h1>{article.title}</h1>
      <h3>{article.author}</h3>
      <p>{article.body}</p>
    </div>
  );
};
export default ArticleCard;
