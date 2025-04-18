"use client";

import "./globals.css";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
