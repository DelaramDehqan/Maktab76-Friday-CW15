import React, { Component } from "react";

import "./App.css";
import { Username, Password, Button } from "./components";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Username />
        <Password />
        <Button />
      </div>
    );
  }
}

export default App;
