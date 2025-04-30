
// 'use client'; // this must be at the VERY top of the file!

// import { useEffect, useState } from 'react';

// export default function ThemeToggle() {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme');
//     if (storedTheme) setTheme(storedTheme);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <button
//       className="p-2 mt-4 rounded bg-gray-200 dark:bg-gray-800"
//       onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//     >
//       Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
//     </button>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      document.documentElement.classList.toggle('dark', dark);
    }
  }, [dark, hasMounted]);

  if (!hasMounted) return null; // Prevent mismatched render

  return (
    <button onClick={() => setDark(!dark)} className="absolute top-4 right-4">
      {dark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
