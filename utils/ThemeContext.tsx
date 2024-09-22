import React, { createContext, ReactNode, useContext, useState } from "react";
import { Theme, darkTheme, lightTheme } from "@/constants/theme";
type ThemeContextType = {
  setDarkTheme: () => void;
  setLightTheme: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const setDarkTheme = () => setTheme(darkTheme);
  const setLightTheme = () => setTheme(lightTheme);
  return (
    <ThemeContext.Provider value={{ setDarkTheme, setLightTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Use theme must be used within a Theme Provider");
  }
  return context;
};
