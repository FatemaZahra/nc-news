import { useEffect, useState } from "react";
import { getCommentsOnArticle } from "../utils/api";
import { useParams } from "react-router-dom";
import CommentsCard from "./CommentsCard";

const ViewComments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getCommentsOnArticle(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [article_id]);

  if (isError) {
    return <p>{isError.msg}</p>;
  }

  if (isLoading) {
    return (
      <p>
        <span class="material-symbols-outlined">hourglass_top</span>Loading...
      </p>
    );
  }

  return (
    <>
      <ul>
        <h3>
          <span className="material-symbols-outlined" id="comment">
            comment
          </span>{" "}
          Comments
        </h3>
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
