import useMouseMove from "../hooks/useMouseMove";

function MouseMove() {
  const [coords] = useMouseMove();

  return (
    <>
      <p>Mouse is at x:{coords.x} y:{coords.y}</p>
    </>
  )
}

export default MouseMove;
