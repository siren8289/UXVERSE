
import React, { useState } from 'react';

function Header() {
  return <h1>🎉 나의 첫 리액트 앱</h1>;
}

function Greeting(props) {
  return <p>오늘의 인사: {props.message}</p>;
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>방문자 수: {count}</p>
      <button onClick={() => setCount(count + 1)}>방문!</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Greeting message="좋은 하루 되세요!" />
      <Counter />
    </div>
  );
}

export default App;

