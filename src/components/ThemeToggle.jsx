import Button from "@mui/material/Button";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next"; 

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation(); 

  return (
    <Button color="inherit" onClick={toggleTheme}>
      {theme === "light" ? `🌙 ${t("theme.dark")}` : `☀️ ${t("theme.light")}`}
    </Button>
  );
};

export default ThemeToggle;