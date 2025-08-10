import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter x={5} value={0} />
    </div>
  );
}

export default App;
