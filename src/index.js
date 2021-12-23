import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NewsProvider } from "./context/NewsContext";

ReactDOM.render(
  <NewsProvider>
    <App />
  </NewsProvider>,
  document.getElementById("root")
);
