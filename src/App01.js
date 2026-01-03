import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App01() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // 1. onClick: 클릭 시 실행될 함수
  // 2. 함수형 업데이트: setValue에 '값'이 아닌 '계산용 함수'를 전달함
  // 3. React의 규칙: 이 함수의 첫 번째 인자(prev)에는 항상 '가장 최신의 상태값'이 들어옴
  // 4. 안전성: 이 방식은 여러 번 연속 호출되어도 값이 꼬이지 않고 정확히 1씩 증가함 보장

  // useEffect는 컴포넌트가 렌더링되고 난 후에 실행되는 함수
  // 첫 번째 인자는 함수, 두 번째 인자는 배열
  // 두 번째 인자는 의존성 배열이라고 부름
  // 의존성 배열의 값이 변경될 때마다 첫 번째 인자의 함수가 실행됨
  // 의존성 배열의 값이 변경되지 않으면 첫 번째 인자의 함수가 실행되지 않음
  useEffect(() => {
    console.log("I run all the time");
  }, []);
  useEffect(() => {
    console.log("I run only changes Keyword");
  }, [keyword]);
  useEffect(() => {
    console.log("I run only changes Counter");
  }, [counter]);
  useEffect(() => {
    console.log("I run only changes Counter or Keyword");
  }, [counter, keyword]);
  return (
    <div>
      <input
        onChange={onChange}
        value={keyword} // 표시될 문자열
        type="text"
        placeholder="Search Here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App01;
