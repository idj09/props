import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-orange-500">Tailwind & Props</h1>
      <Card username="Mona" btnText="Click Me" />
      <Card username="Disuza" btnText="visit" />
    </>
  );
}

export default App;
