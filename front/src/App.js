import React, { Component } from "react";
import { Provider } from "mobx-react";
import stores from "./stores";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App" />
      </Provider>
    );
  }
}

export default App;
