import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ArticleByTopic from "./components/ArticleByTopic";
import ArticleByArticleId from "./components/ArticleByArticleId";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/:topic" element={<ArticleByTopic />} />
        <Route path="/articles/:article_id" element={<ArticleByArticleId />} />
      </Routes>
    </div>
  );
}

export default App;
