import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somtochukwu Anunobi - Full Stack Developer Portfolio",
  description: "Hi, my name is Somtochukwu Anunobi. I am passionate about crafting application to solve problems in the most accessible way.",
  authors: [{ name: "Somtochukwu Anunobi", url: "https://www.linkedin.com/in/somtoanunobi/" }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
