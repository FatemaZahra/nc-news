import { useState } from "react";
import { getCommentsOnArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import { Button } from "@mui/material";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

const ViewComments = ({ article }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  const [isError, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    getCommentsOnArticle(article_id)
      .then((comments) => {
        setComments(comments);
      })
      .catch((err) => {
        setError(err.response.data);
      });
    setComments([]);
  };

  if (isError) {
    return <p>{isError.msg}</p>;
  }

  return (
    <>
      <ul>
        <Button className="button" onClick={handleSubmit}>
          <span className="material-symbols-outlined" id="comment">
            comment
          </span>
          View all comments
        </Button>

        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentsCard comment={comment} />
              <DeleteComment comment={comment} setComments={setComments} />
            </div>
          );
        })}
        <PostComment setComments={setComments} />
      </ul>
    </>
  );
};

export default ViewComments;
