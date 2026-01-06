"use client";
import { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { FaQuoteRight } from "react-icons/fa";
import Title from "./Title";
import { FadeIn } from "./FadeIn";

// Reusable Arrow Styling to match Cyber Theme
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0B1120] hover:bg-[#1e293b] duration-300 rounded-md text-2xl text-[#00D1FF] flex justify-center items-center absolute top-0 right-0 border border-white/5 shadow-xl cursor-pointer z-10 hover:border-[#00D1FF]/50"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0B1120] hover:bg-[#1e293b] duration-300 rounded-md text-2xl text-[#00D1FF] flex justify-center items-center absolute top-0 right-20 border border-white/5 shadow-xl cursor-pointer z-10 hover:border-[#00D1FF]/50"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div style={{ borderRadius: "10px", padding: "10px" }}>
        <ul className="flex gap-4 justify-center mt-8">{dots}</ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
          i === dotActive 
          ? "bg-[#00D1FF] shadow-[0_0_10px_#00D1FF] scale-125" 
          : "bg-gray-600"
        }`}
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full py-20 border-b border-white/5 bg-[#0B1120]">
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="INTEL & FEEDBACK" des="Client Testimonials" />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <Slider {...settings}>
            
            {/* Testimonial One */}
            <div className="w-full outline-none">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
                <div className="w-full lgl:w-[35%] bg-gradient-to-b from-[#1e293b] to-[#0B1120] p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-6">
                  <img
                    className="h-72 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                    src="/images/testmonial/testimonialOne.png"
                    alt="Ahmed Ali"
                  />
                  <div>
                    <p className="text-xs uppercase text-[#00D1FF] font-mono tracking-widest mb-1">
                      // Verified_Client
                    </p>
                    <h3 className="text-2xl font-bold text-white">Ahmed Ali</h3>
                    <p className="text-sm text-gray-400 font-mono">Global Investor</p>
                  </div>
                </div>

                <div className="w-full lgl:w-[60%] flex flex-col justify-center relative">
                  <FaQuoteRight className="text-6xl text-[#00D1FF]/10 absolute -top-4 right-0" />
                  <div className="w-full py-10 bg-[#1e293b]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col border-b border-white/10 pb-4">
                      <h3 className="text-xl lgl:text-2xl font-bold text-white">
                        Trading Strategy Guidance
                      </h3>
                      <p className="text-sm text-[#00D1FF]/60 mt-1 font-mono uppercase">
                        SMC Analysis • 2025
                      </p>
                      <div className="text-yellow-500 flex gap-1 mt-3">
                        {[...Array(5)].map((_, i) => <RiStarFill key={i} />)}
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                      “George’s Smart Money Concept strategies helped me double
                      my portfolio. His analysis is sharp, data-driven, and easy to follow.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Two */}
            <div className="w-full outline-none">
              <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-6">
                <div className="w-full lgl:w-[35%] bg-gradient-to-b from-[#1e293b] to-[#0B1120] p-8 rounded-2xl border border-white/5 shadow-2xl flex flex-col gap-6">
                  <img
                    className="h-72 rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                    src="/images/testmonial/testimonialTwo.png"
                    alt="Sarah Ibrahim"
                  />
                  <div>
                    <p className="text-xs uppercase text-[#00D1FF] font-mono tracking-widest mb-1">
                      // Security_Audit
                    </p>
                    <h3 className="text-2xl font-bold text-white">Sarah Ibrahim</h3>
                    <p className="text-sm text-gray-400 font-mono">Freelance Developer</p>
                  </div>
                </div>

                <div className="w-full lgl:w-[60%] flex flex-col justify-center relative">
                  <FaQuoteRight className="text-6xl text-[#00D1FF]/10 absolute -top-4 right-0" />
                  <div className="w-full py-10 bg-[#1e293b]/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 flex flex-col gap-6 relative z-10">
                    <div className="flex flex-col border-b border-white/10 pb-4">
                      <h3 className="text-xl lgl:text-2xl font-bold text-white">
                        Cybersecurity Project Support
                      </h3>
                      <p className="text-sm text-[#00D1FF]/60 mt-1 font-mono uppercase">
                        Vulnerability Audit • 2025
                      </p>
                      <div className="text-yellow-500 flex gap-1 mt-3">
                        {[...Array(5)].map((_, i) => <RiStarFill key={i} />)}
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                      “George guided me in securing my website against
                      vulnerabilities. His knowledge in ethical hacking and penetration testing is
                      outstanding.”
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;