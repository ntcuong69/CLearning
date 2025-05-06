"use client";

import "./globals.css";
import ThemeProvider from "@/theme";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[linear-gradient(to_right,_#e2e2e2,_#c9d6ff)] dark:bg-[linear-gradient(to_right,_#171823,_#171823)] dark:text-[#FFFFFF]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
