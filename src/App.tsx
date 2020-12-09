import React from "react";
import { Route } from "react-router";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Main} />
    </div>
  );
}

export default App;
