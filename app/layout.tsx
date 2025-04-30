//'use client';

import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'My-Portfolio',
};
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black dark:shadow-gray-950 text-black dark:text-white">
        <Navbar />
        <ThemeToggle />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

