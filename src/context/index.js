import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const MyThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("");

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};