import React, { Component } from "react";
import { Provider } from "mobx-react";
import stores from "./stores";
import TokensPage from "./TokensPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <div className="App">
          <TokensPage />
        </div>
      </Provider>
    );
  }
}

export default App;
