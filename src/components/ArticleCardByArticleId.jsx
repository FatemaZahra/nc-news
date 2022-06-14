import Vote from "./Vote";

const ArticleCardByArticleId = ({ currentArticle }) => {
  return (
    <div className="ArticleCard">
      <h3>{currentArticle.topic}</h3>
      <h2>{currentArticle.title}</h2>
      <h4>{currentArticle.author}</h4>
      <p>{currentArticle.body}</p>
      <button className="button">Add Comments</button>
      <Vote
        votes={currentArticle.votes}
        author={currentArticle.author}
        article_id={currentArticle.article_id}
      />
      <button className="button">More articles on topic</button>
    </div>
  );
};

export default ArticleCardByArticleId;
