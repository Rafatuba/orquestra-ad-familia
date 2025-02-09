import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/header/index.tsx";
import Footer from "./components/footer/index.tsx";
import AosInit from "./components/aos-init.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
    <AosInit />
  </StrictMode>
);
