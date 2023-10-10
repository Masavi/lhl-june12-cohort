import { useState, useEffect } from 'react';

function useMouseMove() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoords({ x: event.x, y: event.y })
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return [coords];
}

export default useMouseMove;
