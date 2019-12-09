import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Credit Card Validation</h1>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
