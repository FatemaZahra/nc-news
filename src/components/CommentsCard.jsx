const CommentsCard = ({ comment }) => {
  return (
    <div className="CommentsCard">
      <h4>{comment.author}</h4>
      <span>
        <time className="date">{comment.created_at.slice(0, 10)} ,</time>
        <time className="date">{comment.created_at.slice(11, 16)}</time>
      </span>
      <p>{comment.body}</p>
      <p>Votes on Comment: {comment.votes}</p>
    </div>
  );
};

export default CommentsCard;
