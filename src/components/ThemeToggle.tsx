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
        padding: "4px 8px",
        cursor: "pointer",
        border: "1px solid var(--text-color)",
        background: `${
          dark
            ? "linear-gradient(80deg,rgba(219, 2, 2, 1) 0%, rgba(255, 247, 0, 1) 100%)"
            : "linear-gradient(80deg,rgba(0, 0, 0, 1) 23%, rgba(0, 94, 217, 1) 100%)"
        }  `,
        color: "var(--text-color)",
        borderRadius: "8px",
      }}
    >
      {dark ? " ☀️ " : " 🌙"}
    </Button>
  );
}
