import { TextField, Button } from "@mui/material";
import { postCommentOnArticle } from "../utils/api";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/User";
import { ArticleContext } from "../context/Article";

const PostComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [addedComment, setAddedComment] = useState({ body: "", username: "" });
  const [isError, setError] = useState(null);
  const [isPosted, setIsPosted] = useState(false);
  const { user } = useContext(UserContext);
  const { article } = useContext(ArticleContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentOnArticle(article_id, addedComment.body, user.username)
      .then((postedComment) => {
        setIsPosted(true);
        setComments((currComments) => {
          return [postedComment, ...currComments];
        });
      })
      .catch((err) => {
        setError(err.response.data);
      });
    setAddedComment({ body: "", username: "" });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setAddedComment((currComm) => {
      return { ...currComm, [name]: value };
    });
  };
  if (isPosted) {
    return <p>Thanks! Your comment has already been posted</p>;
  }

  if (isError) {
    return <p>An Error Occured! Please try again later</p>;
  }

  if (user.username !== "") {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-name"
            label="Insert Comment here"
            name="body"
            value={addedComment.body}
            onChange={handleInput}
            disabled={
              article.author === user.username ||
              user.username === addedComment.username
            }
            required
          />
          <Button type="submit">
            <span className="material-symbols-outlined">add_comment</span>Add
            Comment
          </Button>
        </form>
      </>
    );
  } else {
    return <p>Please sign-in to post a comment</p>;
  }
};

export default PostComment;
