import { useState, useContext, createContext, useMemo } from "react";

const ColorModeContext = createContext("light");

const useColorMode = () => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return { colorMode, toggleColorMode };
};

export { useColorMode, ColorModeContext };
