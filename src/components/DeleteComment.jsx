import { useState, useContext } from "react";
import { Button } from "@mui/material";
import { deleteComment } from "../utils/api";
import { UserContext } from "../context/User";

const DeleteComment = ({ comment, setComments }) => {
  const { user } = useContext(UserContext);
  const [isError, setError] = useState(null);

  const handleClick = () => {
    const deletedCommentId = comment.comment_id;
    deleteComment(deletedCommentId)
      .then(() => {
        alert("Comment deleted");
        setComments((currComments) => {
          let newCommentList = currComments.filter(
            (comment) => comment.comment_id !== deletedCommentId
          );
          return newCommentList;
        });
      })
      .catch((err) => {
        setError(err.response.data);
      });
  };

  if (isError) {
    return <p>An Error Occured! Please try again later</p>;
  }
  if (user.username !== "" && comment.author === user.username) {
    return (
      <>
        <Button onClick={handleClick}>
          <span class="material-symbols-outlined">delete</span>Delete Comment
        </Button>
      </>
    );
  } else if (comment.author !== user.username) {
    return (
      <p className="Sign-in_alert">
        This comment was posted by {comment.author}
      </p>
    );
  }
};

export default DeleteComment;
