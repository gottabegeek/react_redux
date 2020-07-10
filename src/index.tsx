import React from "react";
import ReactDOM from "react-dom";
import App from "./app.component";

ReactDOM.render(<App />, document.getElementById("react-app"));

if ((module as any).hot) {
  (module as any).hot.accept();
}