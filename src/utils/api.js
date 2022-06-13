import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://fatema-nc-news-board.herokuapp.com/api",
});

//articles

export const getAllArticles = () => {
  return articleApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
