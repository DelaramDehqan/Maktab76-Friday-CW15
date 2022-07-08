import React, { Component } from "react";
import "./username.css";

class Username extends Component {
  state = {};
  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text"></input>
      </div>
    );
  }
}

export { Username };