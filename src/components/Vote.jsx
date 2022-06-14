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
    setVoteChange((currVotes) => currVotes + 1);
    patchVotestoArticle(article_id, -1).catch((err) => {
      console.dir(err);
      setVoteChange((currVotes) => currVotes - 1);
      setError(err.response.data);
    });
  };

  if (isError) {
    return <p>Can't vote, something wen't wrong!</p>;
  }

  return (
    <>
      <p>Votes: {votes}</p>
      <button
        onClick={handleClickUpVote}
        disabled={voteChange > 0 || user.username === author}
      >
        {user.username === author
          ? `Hello ${author}, have a lovely day`
          : `Upvote to article by ${author}`}
      </button>
      <button
        onClick={handleClickDownVote}
        disabled={voteChange > 0 || user.username === author || votes <= 0}
      >
        {user.username === author
          ? `Hello ${author}, have a lovely day`
          : `Downvote article by ${author}`}
      </button>
    </>
  );
};
export default Vote;
