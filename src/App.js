import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <small>
          <a
            href="https://github.com/beerbumm/weather-app"
            target="_blank"
            rel="noreferrer"
            id="github-link"
          >
            Open source code{" "}
          </a>
          by Chelsea Watson
        </small>
      </div>
    </div>
  );
}

export default App;
