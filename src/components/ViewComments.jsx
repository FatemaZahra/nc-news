import { useState } from "react";
import { getCommentsOnArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";
import { Button } from "@mui/material";

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
        <Button onClick={handleSubmit}>
          <span className="material-symbols-outlined" id="comment">
            comment
          </span>
          View all comments
        </Button>

        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <CommentsCard comment={comment} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default ViewComments;
