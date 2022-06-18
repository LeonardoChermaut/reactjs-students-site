import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
export const MyThemeProvider = ({ children }) => {
  const [themeSelected, setThemeSelected] = useState("light");

  return (
    <ThemeContext.Provider value={{ themeSelected, setThemeSelected }}>
      {children}
    </ThemeContext.Provider>
  );
};
