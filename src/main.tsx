import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.addEventListener("error", (e) => {
  document.body.innerHTML += `<div style="position:fixed;top:10%;left:10%;right:10%;background:red;color:white;z-index:9999;font-size:24px;padding:20px;border-radius:10px;">${e.message} - ${e.filename}:${e.lineno}</div>`;
});
window.addEventListener("unhandledrejection", (e) => {
  document.body.innerHTML += `<div style="position:fixed;top:50%;left:10%;right:10%;background:red;color:white;z-index:9999;font-size:24px;padding:20px;border-radius:10px;">Promise Rejection: ${e.reason}</div>`;
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
