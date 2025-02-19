import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A personal portfolio showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
          {/* Header */}
          <header className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">
                <Link href={"/"}>My Portfolio</Link>
              </h1>
              <nav>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="/">
                      <span className="hover:underline">Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <span className="hover:underline">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects">
                      <span className="hover:underline">Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="hover:underline">Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto p-6">{children}</main>

          {/* Footer */}
          <footer className="bg-white shadow-inner p-4 text-center text-sm">
            &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
