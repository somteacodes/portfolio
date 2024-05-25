import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somtochukwu Anunobi - Full Stack Developer Portfolio",
  description:
    "Hi, my name is Somtochukwu Anunobi. I am passionate about crafting application to solve problems in the most accessible way.",
  authors: [
    {
      name: "Somtochukwu Anunobi",
      url: "https://www.linkedin.com/in/somtoanunobi/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="p-4 mx-auto w-full min-h-screen container">
        <Header />
        {children}
        <Footer />
        </main>
      </body>
    </html>
  );
}
