import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FooterBottom from "@/components/footer/FooterBottom";
import { Inter, Pacifico } from "next/font/google";

/* =========================
   1. Font Configuration
========================= */
const inter = Inter({ subsets: ["latin"] });

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent",
});

/* =========================
   2. Metadata (SEO + PWA)
========================= */
export const metadata: Metadata = {
  title: {
    default: "George Kasmiro | Cybersecurity Engineer & Developer",
    template: "%s | George Kasmiro",
  },
  description:
    "Portfolio of George Kasmiro, a Cybersecurity student and Full-Stack Developer specializing in secure infrastructure and multimedia design.",
  keywords: [
    "Cybersecurity",
    "Ethical Hacking",
    "Full-Stack Developer",
    "George Kasmiro",
    "Penetration Testing",
    "Next.js Portfolio",
  ],
  authors: [{ name: "George Kasmiro" }],
  creator: "George Kasmiro",

  /* ===== Favicon & PWA ===== */
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#0B1120",

  /* ===== OpenGraph ===== */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.georgekasmiro.site",
    siteName: "George Kasmiro Portfolio",
    title: "George Kasmiro | Cyber Sentinel",
    description: "Securing the digital frontier through code and intelligence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "George Kasmiro Portfolio Preview",
      },
    ],
  },

  /* ===== Twitter ===== */
  twitter: {
    card: "summary_large_image",
    title: "George Kasmiro | Cybersecurity Engineer",
    description: "B.Tech Computer Science & Cybersecurity student.",
    images: ["/og-image.png"],
  },
};

/* =========================
   3. Viewport
========================= */
export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

/* =========================
   4. Root Layout
========================= */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${pacifico.variable} bg-[#0B1120] text-neutral-300 antialiased selection:bg-[#00D1FF]/30 selection:text-white`}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen relative overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <Footer />
        <FooterBottom />

        {/* Ambient Cyber Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#00D1FF]/10 blur-[150px] rounded-full opacity-50" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#00D1FF]/10 blur-[150px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        </div>
      </body>
    </html>
  );
}
