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
