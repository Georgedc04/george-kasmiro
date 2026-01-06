"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaShieldAlt } from "react-icons/fa";
import { FaDownload, FaCode } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../FadeIn";

// --- TypeScript Interfaces ---
interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

interface FooterLinkProps {
  href: string;
  label: string;
}

interface SocialNodeProps {
  href: string;
  icon: React.ReactNode;
}

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1120] border-t border-white/5 pt-20 pb-10">
      <FadeIn className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lgl:gap-8">
        
        {/* 1. Brand Identity & Social Nodes */}
        <div className="flex flex-col gap-8">
          <div className="relative w-24 h-24 group">
            <Image
              src="/logo.png"
              alt="George Kasmiro"
              fill
              className="object-contain rounded-full border-2 border-[#00D1FF]/50 p-1 group-hover:border-[#00D1FF] transition-all duration-500 shadow-[0_0_15px_rgba(0,209,255,0.2)]"
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-[#0B1120] animate-pulse"></div>
          </div>

          <div className="flex gap-3">
            <SocialNode href="https://www.instagram.com/georgedc04" icon={<FaInstagram />} />
            <SocialNode href="https://www.linkedin.com/in/george-kasmiro-2211a42b4" icon={<FaLinkedinIn />} />
            <SocialNode href="https://www.facebook.com/share/19iiRCkttK/" icon={<FaFacebookF />} />
          </div>
          
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            // Secure_Port_Active: 443
          </p>
        </div>

        {/* 2. Directory Navigation */}
        <FooterColumn title="Directory">
          <FooterLink href="/services" label="Services" />
          <FooterLink href="/about" label="About Archive" />
          <FooterLink href="/faq" label="FAQ & Support" />
          <FooterLink href="/contact" label="Contact Uplink" />
        </FooterColumn>

        {/* 3. Assets & Documentation */}
        <FooterColumn title="Resources">
          <Link 
            href="/cv" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#00D1FF] transition-all group"
          >
            <FaDownload className="group-hover:animate-bounce text-xs" /> 
            <span className="text-sm">Download_CV.pdf</span>
          </Link>
          <FooterLink href="/projects" label="Project Repository" />
          <FooterLink href="/" label="Architecture Documentation" />
        </FooterColumn>

        {/* 4. Infrastructure */}
        <FooterColumn title="System">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
             <FaCode className="text-[#00D1FF]" />
             <span>React / Next.js 14</span>
          </div>
          <FooterLink href="/terms" label="Privacy_Protocol" />
          <div className="mt-4 flex items-center gap-2">
            <FaShieldAlt className="text-green-500/50 text-xl" />
            <span className="text-[10px] font-mono text-gray-600">AES-256 Encrypted Profile</span>
          </div>
        </FooterColumn>
      </FadeIn>

      
    </footer>
  );
};

// --- Reusable Sub-Components with TypeScript Definitions ---

const FooterColumn = ({ title, children }: FooterColumnProps) => (
  <div className="flex flex-col gap-6">
    <h3 className="text-sm font-bold uppercase tracking-[3px] text-white border-l-2 border-[#00D1FF] pl-3">
      {title}
    </h3>
    <ul className="flex flex-col gap-4 text-sm">
      {children}
    </ul>
  </div>
);

const FooterLink = ({ href, label }: FooterLinkProps) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-[#00D1FF] hover:translate-x-1 transition-all duration-300 inline-block">
      {label}
    </Link>
  </li>
);

const SocialNode = ({ href, icon }: SocialNodeProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-lg bg-[#1E293B]/50 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00D1FF] hover:border-[#00D1FF]/50 transition-all duration-300 shadow-lg"
  >
    {icon}
  </a>
);

export default Footer;