import { Routes, Route, HashRouter } from "react-router-dom";
import RNN from "./components/blog_pages/RNN";
import Header from "./components/header";
import Home from "./components/home/home";
import About from "./components/about";
import Contact from "./components/contact";
import LL from "./components/blog_pages/LL";
import StackandQueue from "./components/blog_pages/StackandQueue";
import Tree from "./components/blog_pages/Tree";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blogs/ml/rnn" element={<RNN />}></Route>
        <Route path="/blogs/ds/ll" element={<LL />}></Route>
        <Route
          path="/blogs/ds/stackandqueue"
          element={<StackandQueue />}
        ></Route>
        <Route path="/blogs/ds/tree" element={<Tree />}></Route>
      </Routes>
    </HashRouter>
  );
}
