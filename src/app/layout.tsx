import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Education reform demo · Dynamic textbook",
  description:
    "Industrial economics prototype: dashboard, knowledge graph, living textbook, and AI-assisted review.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[color:var(--color-bg)] font-sans text-[color:var(--color-carbon)]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[color:var(--color-border)] py-10 text-center text-xs text-[color:var(--color-muted)]">
          Education reform demo · prototype · {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
