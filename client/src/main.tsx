// client/src/main.tsx
import { createRoot } from "react-dom/client";
import { Router } from "wouter";           // 👈 add this
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Router>               {/* 👈 tell wouter about the base path */}
    <App />
  </Router>
);
