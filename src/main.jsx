import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./i18n";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ContadorProvider } from './context/ContadorContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ContadorProvider>
          <Navbar />
          <App />
        </ContadorProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)