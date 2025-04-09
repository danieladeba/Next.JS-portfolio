// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className=" font-size 1 rembg-gray-200 dark:bg-gray-800 p-8 flex justify-center gap-24" >
//       <Link href="/">Home</Link>
//       <Link href="/about">About</Link>
//       <Link href="/experience">Experience</Link>
//       <Link href="/contact">Hire-Me</Link>
//     </nav>
//   );
// }


// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 sticky top-0 z-50 shadow-md">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         {/* Logo / Brand */}
//         <h1 className="text-xl font-bold">Daniel</h1>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex gap-8 text-base">
//           <Link href="/" className="hover:underline">Home</Link>
//           <Link href="/about" className="hover:underline">About</Link>
//           <Link href="/experience" className="hover:underline">Experience</Link>
//           <Link href="/contact" className="hover:underline">Hire Me</Link>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col gap-4 mt-4 px-4 text-base">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
//           <Link href="/experience" onClick={() => setMenuOpen(false)} className="hover:underline">Experience</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Hire Me</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 sticky top-0 z-50 shadow-md">
//       <div className="max-w-6xl mx-auto flex justify-between items-center">
//         {/* Logo / Brand */}
//         <h1 className="text-3xl font-extrabold tracking-wide justify-center" >My-Portfolio</h1>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex gap-10 text-3xl font-bold">
//           <Link href="/" className=" text-3xl hover:underline transition-all duration-100">Home</Link>
//           <Link href="/about" className=" text-3xl hover:underline transition-all duration-100">About</Link>
//           <Link href="/experience" className=" text-3xl hover:underline transition-all duration-100">Experience</Link>
//           <Link href="/contact" className=" text-3xl hover:underline transition-all duration-100">Hire Me</Link>
//         </div>

//         {/* Mobile Menu Icon */}
//         <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//           {menuOpen ? <X size={36} /> : <Menu size={32} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden flex flex-col gap-4 mt-4 px-4 text-3xl font-semibold">
//           <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
//           <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
//           <Link href="/experience" onClick={() => setMenuOpen(false)} className="hover:underline">Experience</Link>
//           <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Hire Me</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, delay: 0.2 }}
      variants={navVariants}
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 sticky top-0 z-50 shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-wide">My-Portfolio</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 text-3xl font-bold">
          <Link href="/" className="hover:underline transition-all duration-100">Home</Link>
          <Link href="/about" className="hover:underline transition-all duration-100">About</Link>
          <Link href="/experience" className="hover:underline transition-all duration-100">Experience</Link>
          <Link href="/contact" className="hover:underline transition-all duration-100">Hire Me</Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 mt-4 px-4 text-2xl font-semibold"
        >
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:underline">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:underline">About</Link>
          <Link href="/experience" onClick={() => setMenuOpen(false)} className="hover:underline">Experience</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:underline">Hire-Me</Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
