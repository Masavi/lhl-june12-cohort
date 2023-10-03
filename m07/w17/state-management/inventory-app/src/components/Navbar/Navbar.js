// Styles
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <h1>Inventory App</h1>
      <p>Items in Inventory: {props.numberOfItems}</p>
    </header>
  );
}