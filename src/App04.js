import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { BrowserRouter } from "react-router-dom"; // Build 된 페이지의 URL을 기본 URL로 활용

function App04() {
  return (
    //<Router>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* URL path에 따라 해당 element를 렌더링  */}
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        {/*:id에서 id가 변수 이름임*/}
      </Routes>
    </BrowserRouter>
    //</Router>
  );
}

export default App04;
