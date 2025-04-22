import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
