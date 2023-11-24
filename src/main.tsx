import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./tailwind-base.css";
import "@salt-ds/theme/index.css";
import "@salt-ds/core/css/salt-core.css";
import "@salt-ds/icons/css/salt-icon.css";
import "./tailwind.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
