import useCounter from '../hooks/useCounter';

function Counter() {
  const [counter, decreaseCounter, increaseCounter] = useCounter();

  return (
    <div className="counter-container">
      <button onClick={decreaseCounter}>Decrease</button>
      <span>{counter}</span>
      <button onClick={increaseCounter}>Increase</button>
    </div>
  )
}

export default Counter;
