import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phillips Portfolio",
  description:
    "This is teh portfolio from Phillips Uwuamrogie. This portfolio displays the problem solving skills from Phillips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-full flex justify-center mt-7">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
