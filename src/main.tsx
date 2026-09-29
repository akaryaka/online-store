import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./assets/fonts/convert/stylesheet.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* библиотека для заголовков страниц */}
    <HelmetProvider>
      {/* роутинг */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
