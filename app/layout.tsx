import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DHNavbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dattahub Pty Ltd",
  description: "DevOps for small  to mid business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
          <DHNavbar />
          {children}
      </body>
    </html>
  );
}
