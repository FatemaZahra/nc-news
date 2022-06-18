import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { patchVotestoArticle } from "../utils/api";
import { Button } from "@mui/material";

const Vote = ({ votes, article_id, author }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [isError, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleClickUpVote = () => {
    setVoteChange((currVotes) => currVotes + 1);
    patchVotestoArticle(article_id, 1).catch((err) => {
      setVoteChange((currVotes) => currVotes - 1);
      setError(err.response.data);
    });
  };

  const handleClickDownVote = () => {
    setVoteChange((currVotes) => currVotes - 1);
    patchVotestoArticle(article_id, -1).catch((err) => {
      setVoteChange((currVotes) => currVotes + 1);
      setError(err.response.data);
    });
  };

  if (isError) {
    return <p>Can't vote, something wen't wrong!</p>;
  }
  if (user.username !== "") {
    return (
      <>
        <p>Votes on article: {votes + voteChange}</p>
        <Button
          className="button"
          onClick={handleClickUpVote}
          disabled={voteChange > 0 || user.username === author}
        >
          <span className="material-symbols-outlined">thumb_up</span>
          {user.username === author
            ? `Hello ${author}, have a lovely day`
            : `Upvote article by ${author}`}
        </Button>
        <Button
          className="button"
          onClick={handleClickDownVote}
          disabled={
            voteChange > 0 ||
            user.username === author ||
            votes + voteChange <= 0
          }
        >
          <span className="material-symbols-outlined">thumb_down</span>
          {user.username === author
            ? `Hello ${author}, have a lovely day`
            : `Downvote article by ${author}`}
        </Button>
      </>
    );
  } else {
    return <p className="Sign-in_alert">Please sign-in to vote this article</p>;
  }
};
export default Vote;
