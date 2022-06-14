import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { patchVotestoArticle } from "../utils/api";

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
      console.dir(err);
      setVoteChange((currVotes) => currVotes + 1);
      setError(err.response.data);
    });
  };

  if (isError) {
    return <p>Can't vote, something wen't wrong!</p>;
  }

  return (
    <>
      <p>Votes: {votes + voteChange}</p>
      <button
        className="button"
        onClick={handleClickUpVote}
        disabled={voteChange > 0 || user.username === author}
      >
        <span className="material-symbols-outlined">thumb_up</span>
        {user.username === author
          ? `Hello ${author}, have a lovely day`
          : `Upvote article by ${author}`}
      </button>
      <button
        className="button"
        onClick={handleClickDownVote}
        disabled={
          voteChange > 0 || user.username === author || votes + voteChange <= 0
        }
      >
        <span className="material-symbols-outlined">thumb_down</span>
        {user.username === author
          ? `Hello ${author}, have a lovely day`
          : `Downvote article by ${author}`}
      </button>
    </>
  );
};
export default Vote;
