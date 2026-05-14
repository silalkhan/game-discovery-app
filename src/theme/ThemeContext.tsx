import { createContext, useEffect, useState, type ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Load saved theme from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // Save theme whenever darkMode changes
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
