import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://midhunterx.github.io'),
  keywords: ['Developer', 'Portfolio', 'Mid Hunter'],
  creator: 'Mid Hunter',
  openGraph: {
    title: "Mid Hunter's Developer Portfolio",
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
        <main className="bg-gray-100 dark:bg-neutral-950">
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
