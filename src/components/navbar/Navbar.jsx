"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Pacifico } from "next/font/google";
import { FiMenu, FiX, FiShield } from "react-icons/fi";

/* ✅ Cursive font (Next.js safe) */
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { id: 101, title: "Home", path: "/", hash: "home" },
    { id: 102, title: "Projects", path: "/projects", hash: "projects" },
    { id: 103, title: "Contact", path: "/contact", hash: "contact" },
  ];

  const handleNavClick = (path, hash) => {
    setShowMenu(false);

    if (pathname === path) {
      const el = document.getElementById(hash);
      el && el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(path);
      setTimeout(() => {
        const el = document.getElementById(hash);
        el && el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-10 ${
        isScrolled
          ? "h-20 bg-[#0B1120]/80 backdrop-blur-lg border-b border-white/10 shadow-xl"
          : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-[#00D1FF]/10 rounded-lg border border-[#00D1FF]/20 group-hover:border-[#00D1FF]/50 transition-all">
            <FiShield className="text-[#00D1FF] text-xl" />
          </div>

          <div className="flex flex-col">
            <span className="text-white tracking-tighter text-lg leading-none ">
              <span className={pacifico.className}>Kasmiro</span>
              <span className="text-[#00D1FF]">.</span>
            </span>

            <span className="text-[10px] text-gray-500 font-mono tracking-[2px] uppercase">
              Secure_Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.path, link.hash)}
                  className={`text-sm font-medium uppercase tracking-widest relative group transition-colors ${
                    pathname === link.path
                      ? "text-[#00D1FF]"
                      : "text-gray-400 hover:text-[#00D1FF]"
                  }`}
                >
                  {link.title}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1px] bg-[#00D1FF] transition-all duration-300 ${
                      pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-2xl text-[#00D1FF]"
        >
          {showMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#0B1120] flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            onClick={() => setShowMenu(false)}
            className="absolute top-8 right-8 text-3xl text-gray-400"
          >
            <FiX />
          </button>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.path, link.hash)}
              className="text-2xl font-bold text-white hover:text-[#00D1FF] uppercase"
            >
              {link.title}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
