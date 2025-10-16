"use client";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Button
      onClick={() => setDark(!dark)}
      style={{
        padding: "8px 16px",
        margin: "16px",
        cursor: "pointer",
        border: "1px solid var(--text-color)",
        background: "transparent",
        color: "var(--text-color)",
        borderRadius: "8px",
      }}
    >
      {dark ? "Светлая тема ☀️" : "Тёмная тема 🌙"}
    </Button>
  );
}
