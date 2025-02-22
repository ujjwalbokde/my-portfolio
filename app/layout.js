import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ujjwal Bokde",
  description: "Ujjwal Bokde | Software Engineer | Portfolio | ujjwal-bokde.vercel.app"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" className="rounded-full"/>
      </head>
      <body
        className="bg-hero-bg text-white "
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
