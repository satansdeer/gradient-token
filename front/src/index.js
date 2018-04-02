import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Nunito:300,400,700", "Open Sans:300,400,700", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
