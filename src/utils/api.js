import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://fatema-nc-news-board.herokuapp.com/api",
});

//articles
export const getArticles = (topic) => {
  return articleApi.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getArticleById = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchVotestoArticle = (article_id, inc_votes) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.article;
    });
};

//comments
export const getCommentsOnArticle = (article_id) => {
  return articleApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postCommentOnArticle = (article_id, body, username) => {
  return articleApi
    .post(`/articles/${article_id}/comments`, {
      body,
      username,
    })
    .then(({ data }) => {
      console.log(data, "in api");
      return data.comment;
    });
};

//users
export const getUsers = () => {
  return articleApi.get("/users").then(({ data }) => {
    return data.users;
  });
};
