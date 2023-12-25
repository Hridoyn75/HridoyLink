import Navbar from "@/components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HridoyLink",
  description: "Created by Nazmul Hridoy: github=> hridoyn75",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
