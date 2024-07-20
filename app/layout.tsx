import {NavItem, NavItemSelected, NavBar} from '@/constituents/sections/navigational-strip'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Crafting digital experiences with precision and artistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar>
          <NavItemSelected href="#home" text="Home"/>
          <NavItem href="#home" text="Skills"/>
          <NavItem href="/dashboard" text="Dashboard"/>
        </NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
