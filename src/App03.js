import { useState, useEffect } from "react";

function App03() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState("");
  const onChange = (event) => {
    setMoney(event.target.value);
    // 여기 들어온 값이 숫자인지 확인
    // 숫자일 경우, 해당 숫자로 구매할 수 있는 각 코인을 표시
    // 숫자가 아니거나 빈칸이면 걍 원본을 출력
    isNaN(event.target.value) || event.target.value === ""
      ? fetch("https://api.coinpaprika.com/v1/tickers")
          .then((response) => response.json())
          .then((json) => {
            setCoins(json);
            setLoading(false);
          })
      : setCoins(
          coins.map((coin) => {
            return {
              ...coin, // coin 객체의 모든 값을 그대로 복사해서 할당
              quotes: {
                ...coin.quotes,
                USD: {
                  ...coin.quotes.USD,
                  price: coin.quotes.USD.price / event.target.value,
                },
              },
            };
          })
        );
  };

  // useEffect는 컴포넌트가 렌더링되고 난 후에 실행되는 함수
  useEffect(() => {
    // 렌더링 이후에 실행되어야 하므로 useEffect에서 fetch 수행
    // Promise가 resolve되면, then 콜백에서 그 결과를 사용하여 다음 코드를 실행
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!{loading ? "" : `(${coins.length})`}</h1>
      <input
        onChange={onChange}
        value={money}
        type="number"
        placeholder="How much can I buy..."
      ></input>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App03;
