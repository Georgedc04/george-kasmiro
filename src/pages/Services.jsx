"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import { FadeIn } from "../components/FadeIn";
import Title from "../components/Title";
import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa";
import { FaUserSecret, FaQuoteRight } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

// Slick CSS - Make sure these are installed: npm install react-slick slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- Services Data ---
const services = [
  { icon: <FaUserSecret />, title: "Security Audits", description: "Vulnerability assessments and penetration testing to harden your digital infrastructure." },
  { icon: <FaLaptopCode />, title: "Full-Stack Dev", description: "Building resilient web applications with high-performance architectures and clean code." },
  { icon: <FaServer />, title: "Backend Systems", description: "Secure API development and database management for scalable enterprise solutions." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Engineering intuitive interfaces that prioritize security, speed, and user experience." },
];
 
// --- Testimonials Data ---
const testimonials = [
  {
    img: "/images/testmonial/testimonialOne.png",
    name: "Ahmed Ali",
    role: "Investor",
    title: "Market Analysis Link",
    details: "George’s technical logic helped me optimize my portfolio. His security-first approach to data is impressive.",
    location: "Global Remote • 2025",
  },
  {
    img: "/images/testmonial/testimonialTwo.png",
    name: "Sarah Ibrahim",
    role: "Lead Developer",
    title: "Network Shielding",
    details: "Outstanding grasp of ethical hacking. He identified critical leaks that other engineers missed entirely.",
    location: "Online Audit • 2025",
  },
];

// --- Custom Arrows (JavaScript Version - No Types) ---
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 -right-4 lg:-right-12 z-10 cursor-pointer text-2xl w-12 h-12 bg-[#0B1120] border border-[#00D1FF]/30 rounded-full flex justify-center items-center text-[#00D1FF] transition-all hover:bg-[#00D1FF] hover:text-[#0B1120] shadow-[0_0_15px_rgba(0,209,255,0.2)]"
    onClick={onClick}
  >
    <HiArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
 <div
  className="absolute top-1/2 -translate-y-1/2 -left-4 lg:-left-12 z-10 cursor-pointer text-2xl w-12 h-12 bg-[#0B1120] border border-[#00D1FF]/30 rounded-full flex justify-center items-center text-[#00D1FF] transition-all hover:bg-[#00D1FF] hover:text-[#0B1120] shadow-[0_0_15px_rgba(0,209,255,0.2)]"
  onClick={onClick}
>
  <HiArrowLeft />
</div>
);

const ServicesAndTestimonials = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    appendDots: (dots) => (
      <div className="mt-10">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          i === dotActive ? "bg-[#00D1FF] shadow-[0_0_10px_#00D1FF] scale-125" : "bg-gray-600"
        }`}
      />
    ),
  };

  return (
    <div className="bg-[#0B1120]">
      {/* --- Services Section --- */}
      <section id="services" className="w-full py-24 border-b border-white/5">
        <FadeIn>
          <div className="text-center mb-16">
            <Title title="OPERATIONS" des="My Expertise" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="relative group bg-[#1E293B]/20 border border-white/5 p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:border-[#00D1FF]/40 hover:-translate-y-2"
              >
                <div className="text-4xl text-[#00D1FF] mb-6 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
                <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-[#00D1FF] uppercase tracking-widest">Protocol: Active</span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* --- Testimonials Section --- */}
      <section id="testimonial" className="w-full py-24">
        <FadeIn>
          <div className="text-center mb-16">
            <Title title="LOGS" des="Client Feedback" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative">
            <Slider {...settings}>
                {testimonials.map((t, i) => (
                  <div key={i} className="outline-none">
                    <div className="flex flex-col lg:flex-row items-stretch gap-8 min-h-[400px] py-4">
                      
                      {/* Identity Card */}
                      <div className="w-full lg:w-1/3 bg-[#1E293B]/30 border border-white/5 rounded-2xl overflow-hidden flex flex-col items-center text-center shadow-2xl">
                        <div className="w-full h-64 relative">
                          <img className="w-full h-full object-cover grayscale opacity-80" src={t.img} alt={t.name} />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] to-transparent"></div>
                        </div>
                        <div className="p-6 -mt-12 relative z-10 w-full">
                          <p className="text-[10px] uppercase text-[#00D1FF] font-mono tracking-widest mb-1">// AUTH_USER</p>
                          <h3 className="text-2xl font-bold text-white">{t.name}</h3>
                          <p className="text-gray-400 text-sm">{t.role}</p>
                        </div>
                      </div>

                      {/* Briefing Content */}
                      <div className="w-full lg:w-2/3 bg-gradient-to-br from-[#1E293B]/40 to-transparent border border-white/5 p-10 rounded-2xl flex flex-col justify-center relative">
                        <FaQuoteRight className="absolute top-8 right-10 text-5xl text-[#00D1FF]/10" />
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-[#00D1FF] mb-1">{t.title}</h3>
                          <p className="text-xs font-mono text-gray-500 uppercase tracking-tighter">{t.location}</p>
                          <div className="flex gap-1 text-yellow-500 mt-3 text-sm">
                            {[...Array(5)].map((_, idx) => <RiStarFill key={idx} />)}
                          </div>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed italic border-l-2 border-[#00D1FF]/30 pl-6">
                          "{t.details}"
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default ServicesAndTestimonials;