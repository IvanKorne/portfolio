import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivan | Personal Portfolio",
  description: "Ivan Korneychuk's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0A192F] text-slate-50 min-h-screen `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
