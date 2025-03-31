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

export const metadata = {
  title: "The King of Cats",
  description: "Created by Roeland",
};

function Header() {
  return (
    <header className="bg-sky-800 py-4">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div>
            <Link className="text-2xl" href="/">Home</Link>
          </div>
          <div>
            <Link className="text-2xl" href="/voting">The Royal Election</Link>
          </div>
          <div>
            <Link className="text-2xl" href="/breeds">Breed Database</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

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
        <Header />
        {children}
      </body>
    </html>
  );
}
