// app/layout.js
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'My-Portfolio',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <ThemeToggle />
        <main className="p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
