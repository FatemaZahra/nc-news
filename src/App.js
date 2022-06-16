import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SortArticle from "./components/SortArticle";
import { Route, Routes } from "react-router-dom";
import ArticleByTopic from "./components/ArticleByTopic";
import ArticleByArticleId from "./components/ArticleByArticleId";
import Users from "./components/Users";
import OrderArticles from "./components/OrderArticles";
import { UserContext } from "./context/User";
import { ArticleContext } from "./context/Article";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "" });
  const [article, setArticle] = useState({
    title: "Sony Vaio; or, The Laptop",
    topic: "mitch",
    author: "icellusedkars",
    body: "Call me Mitchell. Some....",
    created_at: "2020-10-16T05:03:00.000Z",
    votes: 10,
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ArticleContext.Provider value={{ article, setArticle }}>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topic" element={<ArticleByTopic />} />
            <Route
              path="/articles/:article_id"
              element={<ArticleByArticleId />}
            />
            <Route path="/users" element={<Users />} />
            <Route
              path="/articles/sort_by/:sort_by"
              element={<SortArticle />}
            />
            <Route path="/articles/order/:order" element={<OrderArticles />} />
          </Routes>
        </div>
      </ArticleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
