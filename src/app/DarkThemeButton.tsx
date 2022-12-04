"use client";
import { useState, useEffect } from "react";

export default function DarkThemeButton() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    document.querySelector("html").classList.add(localTheme);
    setTheme(localTheme);
  }, []); // eslint-disable-line

  return (
    <button
      className="rounded-full border  bg-black px-4 py-1 text-sm font-semibold text-white  hover:bg-slate-800  focus:outline-none  dark:bg-white dark:text-black "
      onClick={() => {
        const html = document.querySelector("html");
        if (theme === "light") {
          html.classList.add("dark");
          html.classList.remove("light");
          setTheme("dark");
          localStorage.setItem("theme", "dark");
        } else {
          html.classList.add("light");
          html.classList.remove("dark");
          setTheme("light");
          localStorage.setItem("theme", "light");
        }
      }}
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
