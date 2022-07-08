import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="button-input">Submit</button>
      </div>
    );
  }
}

export { Button };