import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/navbar";
import Laced from "@/app/_components/laced";
import { Footer } from "@/app/_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phillips Portfolio",
  description:
    "Explore the digital showcase of Phillips Uwumarogie, " +
    "a dynamic professional known for his exceptional problem-solving skills and innovative solutions." +
    " This portfolio highlights a curated selection of projects that demonstrate his expertise in technology and " +
    "his ability to transform challenges into impactful results. Dive into Phillips' world of creativity " +
    "and engineering excellence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="w-full flex justify-center mt-7">
          <Navbar />
        </div>
        <Laced>{children}</Laced>
        <div className="w-full flex justify-center">
          <Footer />
        </div>
      </body>
    </html>
  );
}
