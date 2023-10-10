import { useState } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);

  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  return [counter, decreaseCounter, increaseCounter];
}

export default useCounter;
