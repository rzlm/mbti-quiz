import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
   variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Personality Quiz",
  description: "Take the quiz and discover your personality type!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.variable} antialiased`}>
      <body
        className={` ${lexend.variable} antialiased font-lexend`}
      >
        <header className="bg-purple-50 p-4">
          <h1 className="text-md font-bold text-center text-purple-800">Personality Quiz</h1>
    <div className="text-center text-purple-600 ">  <Link href="/" className=" hover:underline">
        Home
      </Link>
      <Link href="/about" className="hover:underline ml-4">
        About
      </Link></div>
        </header>
        {children}
      </body>
    </html>
  );
}
