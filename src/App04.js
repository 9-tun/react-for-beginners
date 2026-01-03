import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App04() {
  return (
    <Router>
      <Routes>
        {/* URL path에 따라 해당 element를 렌더링  */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        {/*:id에서 id가 변수 이름임*/}
      </Routes>
    </Router>
  );
}

export default App04;
