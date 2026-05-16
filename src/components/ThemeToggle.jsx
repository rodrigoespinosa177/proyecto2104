import Button from "@mui/material/Button";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button color="inherit" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Oscuro" : "☀️ Claro"}
    </Button>
  );
};

export default ThemeToggle;
