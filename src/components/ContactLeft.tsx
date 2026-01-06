import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaShieldAlt } from "react-icons/fa";

const ContactLeft = () => {
  // Reusable Tailwind style for social icons
  const socialIconStyles = "w-12 h-12 bg-[#0B1120] border border-white/10 text-[#00D1FF] flex items-center justify-center rounded-lg text-xl hover:bg-[#00D1FF] hover:text-[#0B1120] hover:shadow-[0_0_15px_#00D1FF] transition-all duration-300 cursor-pointer";

  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-b from-[#1E293B] to-[#0B1120] p-8 rounded-3xl shadow-2xl border border-white/10 flex flex-col gap-8 relative overflow-hidden group">
      
      {/* Subtle Background Decoration */}
      <div className="absolute -right-6 -top-6 text-[#00D1FF]/5 text-9xl transform rotate-12 pointer-events-none">
        <FaShieldAlt />
      </div>

      {/* Profile Image with Cyber Border */}
      <div className="relative z-10 rounded-2xl overflow-hidden border border-[#00D1FF]/20 group-hover:border-[#00D1FF]/50 transition-colors duration-500">
        <img
          className="w-full h-64 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          src="/images/contact.jpg"
          alt="George Kasmiro"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent opacity-40"></div>
      </div>

      {/* Identity Info */}
      <div className="flex flex-col gap-3 relative z-10">
        <h3 className="text-3xl font-bold text-white tracking-tight">
          George Kasmiro
        </h3>
        <p className="text-sm font-mono text-[#00D1FF] uppercase tracking-[2px]">
          CS Engineer & Ethical Hacker
        </p>
        <p className="text-base text-[#94A3B8] leading-relaxed mt-2">
          Specializing in technology, ethical hacking, and network security. 
          Building robust digital defenses and secure infrastructure.
        </p>

        {/* Contact Metadata "Chips" */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Secure Line</span>
            <span className="text-gray-200 font-medium">+91 92588 85387</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Public Key / Email</span>
            <span className="text-gray-200 font-medium">gkamsiro@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Social Connectivity */}
      <div className="flex flex-col gap-4 mt-2 relative z-10">
        <h2 className="text-[10px] uppercase font-bold text-[#94A3B8] tracking-[3px]">
          Network Nodes
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/georgedc04"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconStyles}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/george-kasmiro-2211a42b4"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconStyles}
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.facebook.com/share/19iiRCkttK/"
            target="_blank"
            rel="noopener noreferrer"
            className={socialIconStyles}
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Bottom Footer Decor */}
      <div className="mt-4 pt-4 border-t border-white/5">
        <p className="text-[10px] font-mono text-gray-600 italic">
          // Connection_Status: encrypted
        </p>
      </div>
    </div>
  );
};

export default ContactLeft;