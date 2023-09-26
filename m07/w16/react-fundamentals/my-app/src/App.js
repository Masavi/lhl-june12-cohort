import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <h1>My first React App 🧩</h1>
      <HelloWorld />
      <Counter title="Alpha" counter={0} />
      <Counter title="Beta" counter={5} />
      <Counter title="Gamma" counter={-5} />
    </>
  );
}

export default App;
