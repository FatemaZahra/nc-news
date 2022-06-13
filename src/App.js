import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ArticleByTopic from "./components/ArticleByTopic";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:topic" element={<ArticleByTopic />} />
      </Routes>
    </div>
  );
}

export default App;
