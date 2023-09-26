import { useState } from 'react';
import '../styles/counter.css';

function Counter(props) {
  // console.log('🚀 Props:', props);
  // let counter = props.counter;
  const [counter, setCounter] = useState(props.counter);

  const handleIncrement = () => {
    console.log('Increasing by 1...');
    setCounter(counter + 1);
    console.log('✅ Counter after increase:', counter);
  }

  const handleDecrement = () => {
    console.log('Decreasing by 1...');
    setCounter(counter - 1);
    console.log('❌ Counter after decrease:', counter);
  }

  return (
    <article className="container">
      <h3>{props.title}</h3>
      <span>{counter}</span>
      <div className="counter-btn-container">
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
      </div>
    </article>
  )
}

export default Counter;
