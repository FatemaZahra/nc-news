import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";
import ArticleByTopic from "./components/ArticleByTopic";
import ArticleByArticleId from "./components/ArticleByArticleId";
// import ViewComments from "./components/ViewComments";
import Users from "./components/Users";
import { UserContext } from "./context/User";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ username: "" });
  return (
    <UserContext.Provider value={{ user, setUser }}>
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
          {/* <Route
            path="/articles/:article_id/comments"
            element={<ViewComments />}
          /> */}
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
