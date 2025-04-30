

import { FaTwitter, FaYoutube, FaLinkedin, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full p-4 sm:p-6 lg:p-8 gap-8">
      {/* Top row - side by side divs */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
        {/* Left div */}
        <div className=" bg-gradient-to-r from-emerald-400 text-center md:text-left space-y-4 flex-1">
          <h1 className="text-3xl md:text-5xl text-yellow-400 font-bold">Hi, I'm Daniel Adeba</h1>
          <p className="text-3xl text-shadow-teal-300 md:text-3xl max-w-xl">
            <h2>
              <b className= "text-shadow-teal-300 ">Full-Stack Developer</b>
            </h2>
            <h3 className="text-shadow-teal-300 text-3xl ">
              A Passionate Computer Engineering student from AAi, <br /> with a focus on Full-Stack Development and a strong
              interest in AI and ML.<br /> I am a Web Designer with the extensive experience for over 2-years.<br /> Moreover, expertise
              in website designer: Front-end design, and more...
            </h3>
          </p>
        </div>

        {/* Right div */}
        <div className="text-center md:text-right space-y-4 flex-1">
          <img src="/image.jpg" alt="Daniel" className="bg-amber-100 w-100 h-100 rounded-full mx-auto" />
        </div>
      </div>

      {/* Bottom div - centered */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col gap-4 justify-center">
          {/* CV Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="DANIEL-ADEBA-OLIKA-FlowCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition text-sm md:text-base flex items-center justify-center"
            >
              View CV
            </a>
            <a
              href="DANIEL-ADEBA-OLIKA-FlowCV.pdf"
              download
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition text-sm md:text-base flex items-center justify-center"
            >
              Download CV
            </a>
          </div>
          {/* Social Media Buttons */}
          <div className="flex  py-60 flex-wrap justify-center gap-100 sm:gap-4 mt-6">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-sky-500 rounded-full hover:bg-sky-600 transition"
              aria-label="Twitter"
            >
              <FaTwitter className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://youtube.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full hover:bg-red-700 transition"
              aria-label="YouTube"
            >
              <FaYoutube className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-800 rounded-full hover:bg-blue-900 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full hover:bg-green-600 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-full hover:bg-blue-500 transition"
              aria-label="Telegram"
            >
              <FaTelegram className="text-white text-xl sm:text-2xl" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full hover:bg-gray-900 transition"
              aria-label="GitHub"
            >
              <FaGithub className="text-white text-xl sm:text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}