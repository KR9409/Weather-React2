import logo from "./logo.svg";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <WeatherSearch />
      </header>
    </div>
  );
}

export default App;
