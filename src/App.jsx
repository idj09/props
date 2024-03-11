import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Tailwind & Props</h1>
      <Card username="Mona" btnText="Click Me" />
      <Card username="Disuza" btnText="visit" />
    </>
  );
}

export default App;
