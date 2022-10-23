import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </div>
);
