import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OB",
  description: "Oktay Bagci Hair Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
