import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  keywords: ['Developer', 'Portfolio', 'Mid Hunter'],
  creator: 'Mid Hunter',
  openGraph: {
    title: "Midhun Jinan's Developer Portfolio",
    description: "Crafting digital experiences with precision and artistry",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-100 dark:bg-black">
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
