// Step 1: import dependencies
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// PREP fn: a) what you want to render, b) where you want to render
ReactDom.render(
  <App firstName={"Bob Smith"} />,
  document.getElementById("root")
);
