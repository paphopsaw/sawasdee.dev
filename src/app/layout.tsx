import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Sawasdee",
  description: "Personal site of Stock Sawasdee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className}`}>
        <Navbar></Navbar>
        <div className="flex flex-col justify-center items-center">
          <div className="w-full max-w-screen-md  px-4 sm:px-8 py-14 sm:py-24">
            {children}
          </div>
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
