"use client";
import { useState } from "react";
import { send } from "@emailjs/browser";
import Title from "../components/Title";
import { FadeIn } from "../components/FadeIn";
import ContactLeft from "../components/ContactLeft";
import { FaCheckCircle, FaExclamationCircle, FaLock, FaTerminal, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  // --- State Management ---
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isSending, setIsSending] = useState(false);

  // --- Validation Logic ---
  const emailValidation = (emailAddress: string) => {
    return String(emailAddress)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "") return setErrMsg("Username is required!");
    if (phoneNumber === "") return setErrMsg("Phone number is required!");
    if (email === "") return setErrMsg("Please give your Email!");
    if (!emailValidation(email)) return setErrMsg("Give a valid Email!");
    if (subject === "") return setErrMsg("Please give your Subject!");
    if (message === "") return setErrMsg("Message is required!");

    setIsSending(true);
    setErrMsg("");

    const templateParams = {
      username,
      phoneNumber,
      email,
      subject,
      message,
    };

    send(
      "service_enfcaj4",
      "template_5920jta",
      templateParams,
      "efilyUTViTF9aMiQ4"
    )
      .then(() => {
        setSuccessMsg("Your message has been sent successfully!");
        setErrMsg("");
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
        setIsSending(false);
      })
      .catch(() => {
        setErrMsg("Something went wrong. Please try again.");
        setIsSending(false);
      });
  };

  // --- Inline Styles (Cyber Sentinel Theme) ---
  const labelStyles = "text-[10px] uppercase tracking-[2px] text-[#00D1FF] font-bold mb-2 flex items-center gap-2";
  const inputStyles = "w-full bg-[#0B1120]/50 border border-white/10 rounded-lg h-12 px-4 text-sm text-gray-200 outline-none focus:border-[#00D1FF]/50 focus:bg-[#0B1120] transition-all duration-300 placeholder:text-gray-700";
  const textAreaStyles = "w-full bg-[#0B1120]/50 border border-white/10 rounded-lg p-4 text-sm text-gray-200 outline-none focus:border-[#00D1FF]/50 focus:bg-[#0B1120] transition-all duration-300 resize-none placeholder:text-gray-700";

  return (
    <section id="contact" className="w-full py-20 bg-[#0B1120] selection:bg-[#00D1FF]/30">
      <FadeIn>
        <div className="flex justify-center items-center text-center mb-10">
          <Title title="CONTACT PROTOCOL" des="Establish Connection" />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full flex flex-col lgl:flex-row gap-10">
            {/* Left side (info, social links, etc.) */}
            <ContactLeft />

            {/* Right side (The Secure Form) */}
            <div className="w-full lgl:w-[60%] bg-[#1E293B]/20 border border-white/10 rounded-3xl p-6 lgl:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Terminal Header Decoration */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase">
                  <FaTerminal className="text-[#00D1FF]" />
                  <span>{isSending ? "Transmitting..." : "Link Stable"}</span>
                </div>
              </div>

              {/* Status Messages */}
              {errMsg && (
                <div className="mb-6 flex items-center gap-3 py-3 px-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm animate-pulse">
                  <FaExclamationCircle /> {errMsg}
                </div>
              )}
              {successMsg && (
                <div className="mb-6 flex items-center gap-3 py-3 px-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg text-sm">
                  <FaCheckCircle /> {successMsg}
                </div>
              )}

              <form className="flex flex-col gap-6" onSubmit={handleSend}>
                <div className="w-full flex flex-col lgl:flex-row gap-6">
                  <div className="w-full lgl:w-1/2 flex flex-col">
                    <label className={labelStyles}>Subject Identification</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      className={inputStyles}
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-full lgl:w-1/2 flex flex-col">
                    <label className={labelStyles}>Contact Line</label>
                    <input
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      className={inputStyles}
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className={labelStyles}>Gateway Address</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={inputStyles}
                    type="email"
                    placeholder="Email Address"
                  />
                </div>

                <div className="flex flex-col">
                  <label className={labelStyles}>Inquiry Subject</label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={inputStyles}
                    type="text"
                    placeholder="Message Subject"
                  />
                </div>

                <div className="flex flex-col">
                  <label className={labelStyles}>Encrypted Message</label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={textAreaStyles}
                    rows={6}
                    placeholder="Describe the project or security scope..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="group relative w-full h-14 bg-[#00D1FF] text-[#0B1120] font-bold uppercase tracking-[2px] text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,209,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSending ? "Transmitting..." : "Execute Connection"}
                      {!isSending && <FaPaperPlane className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </span>
                    {/* Hover Slide Effect */}
                    <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-20"></div>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-gray-500 mt-6 tracking-widest">
                    <FaLock className="text-[#00D1FF]/50" />
                    SECURE AES-256 ENCRYPTED CHANNEL
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Contact;