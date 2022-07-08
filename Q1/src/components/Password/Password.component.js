import React, { Component } from "react";
import "./password.css";

class Password extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>Password</label>
        <input type="text"></input>
      </div>
    );
  }
}

export { Password };