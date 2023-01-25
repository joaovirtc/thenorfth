import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./pages/errorPage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
