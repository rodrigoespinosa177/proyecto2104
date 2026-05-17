import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import "./i18n";
import { ThemeProvider } from "./context/ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <UserProvider>
          <CarritoProvider>
            <Navbar />
            <App />
          </CarritoProvider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
