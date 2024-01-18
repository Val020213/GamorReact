import React from "react";
import SunIcon from "../IconsSvg/Sun.tsx";

export default function SwitchTheme(): JSX.Element {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? (storedTheme as "light" | "dark") : "light";
  });

  React.useEffect(() => {
    // evitar que con F5 se pierda el tema
    if (theme === "dark") {
      document.querySelector("body")?.classList.add("dark");
    } else {
      document.querySelector("body")?.classList.remove("dark");
    }
  }, [theme]);

  function toggleTheme(): void {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button onClick={toggleTheme}>
      <SunIcon />
    </button>
  );
}
