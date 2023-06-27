import "./App.css";
import Playground from "./playground";
import Posts from "./useEffect/post";
import WindowWidth from "./useEffect/windowWidth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Playground />
        <hr />
        <Posts />
        <WindowWidth />
      </header>
    </div>
  );
}

export default App;
