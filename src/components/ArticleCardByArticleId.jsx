import Vote from "./Vote";
import { Button } from "@mui/material";
import ViewComments from "./ViewComments";

const ArticleCardByArticleId = ({ currentArticle }) => {
  return (
    <div className="ArticleCard">
      <h3>
        {currentArticle.topic[0].toUpperCase() +
          currentArticle.topic.slice(1, currentArticle.length)}
      </h3>
      <h2>{currentArticle.title}</h2>
      <h4>{currentArticle.author}</h4>
      <p>{currentArticle.body}</p>
      <Vote
        votes={currentArticle.votes}
        author={currentArticle.author}
        article_id={currentArticle.article_id}
      />
      <ViewComments article={currentArticle} />

      <Button className="button">
        <span class="material-symbols-outlined">expand_more</span>More articles
        on topic
      </Button>
    </div>
  );
};

export default ArticleCardByArticleId;
