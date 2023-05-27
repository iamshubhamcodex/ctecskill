import { useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const poppins = Inter({ weight: ["300", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Computer Technical Skills",
  description: "Welcome to Computer Technical Skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.addEventListener("resize", () => {});

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <span className="cursorFollow">fd</span>
        {children}
      </body>
    </html>
  );
}
