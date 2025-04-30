

// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   // Animation variants for the mobile menu
//   const menuVariants = {
//     open: { 
//       opacity: 1, 
//       height: "auto", 
//       transition: { duration: 0.3, ease: "easeInOut" }
//     },
//     closed: { 
//       opacity: 0, 
//       height: 0, 
//       transition: { duration: 0.3, ease: "easeInOut" }
//     },
//   };

//   return (
//     <nav className="text-white z-50 shadow-md">
//       <div className="bg-cyan-700 px-4 sm:px-6 lg:px-8">
//         <div className="relative flex justify-between items-center py-4">
//           {/* Logo/Brand */}
//           <Link href="/">
//             <span className="text-3xl sm:text-2xl font-semibold">Portfolio</span>
//           </Link>

//           {/* Desktop Menu - Centered */}
//           <div className="hidden md:flex space-x-6 text-2xl absolute left-1/2 transform -translate-x-1/2 gap-8">
//             <Link href="/" className="hover:text-amber-100 transition-colors">
//               Home
//             </Link>
//             <Link href="/about" className="hover:text-amber-100 transition-colors">
//               About
//             </Link>
//             <Link href="/experience" className="hover:text-amber-100 transition-colors">
//               Experience
//             </Link>
//             <Link href="/contact" className="hover:text-amber-100 transition-colors">
//               Contact
//             </Link>
//           </div>

//           {/* Hamburger Menu (Mobile) */}
//           <div className="md:hidden z-50">
//             <button
//               onClick={toggleMenu}
//               className="focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md p-1"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - In Document Flow */}
//         <motion.div
//           initial={false}
//           animate={isOpen ? "open" : "closed"}
//           variants={menuVariants}
//           className="md:hidden w-full bg-cyan-700 overflow-hidden"
//           style={{ zIndex: 40 }}
//         >
//           <div className="flex flex-col items-center space-y-4 py-4 px-4 text-lg">
//             <Link
//               href="/"
//               className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//             <Link
//               href="/experience"
//               className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
//               onClick={toggleMenu}
//             >
//               Experience
//             </Link>
//             <Link
//               href="/contact"
//               className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
//               onClick={toggleMenu}
//             >
//               Contact
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Animation variants for the mobile menu
  const menuVariants = {
    open: { 
      opacity: 1, 
      height: "auto", 
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    closed: { 
      opacity: 0, 
      height: 0, 
      transition: { duration: 0.3, ease: "easeInOut" }
    },
  };

  return (
    <nav className="text-white z-50 shadow-md">
      <div className="bg-black px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/">
            <span className="text-3xl sm:text-2xl font-semibold">Portfolio</span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex space-x-6 text-2xl absolute left-1/2 transform -translate-x-1/2 gap-8">
            <Link href="/" className="hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/experience" className="hover:text-green-600 transition-colors">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md p-1"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - In Document Flow */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="md:hidden w-full bg-cyan-700 overflow-hidden relative"
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center space-y-3 py-4 px-4 text-lg">
            <Link
              href="/"
              className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/experience"
              className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="w-full text-center py-2 hover:text-amber-100 hover:bg-cyan-800 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-100 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}