import { createContext, useContext, useEffect, useState } from "react";

// Creamos el contexto global, por eso importamos createContext y luego lo consumimos con useContext
const ThemeContext = createContext();

// Exportamos el provider para poder envolver toda la app
export const ThemeProvider = ({ children }) => {
  // useState guarda el tema actual. Primero intenta leerlo desde localStorage.
  // Si no existe, usa "light" por defecto.
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    // Eliminamos posibles clases anteriores, para evitar conflictos.
    document.body.classList.remove("light", "dark");

    // Agregamos la clase actual al body
    document.body.classList.add(theme);

    // Guardamos el tema en el navegador
    localStorage.setItem("theme", theme);
  }, [theme]);
  // [theme] significa que el effect solamente se ejecutará cuando cambie el tema. Si no estuviera, correría en todos los renders.

  const toggleTheme = () => {
    // Esta función alterna entre light y dark, prev representa el estado anterior.
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useTheme = () => useContext(ThemeContext);
