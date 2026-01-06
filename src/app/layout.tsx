import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import FooterBottom from "@/components/footer/FooterBottom";
import { Inter, Pacifico } from "next/font/google"; // Added Inter for technical body text

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-accent", // Assigned to a CSS variable
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} ${pacifico.variable} bg-[#0B1120] text-neutral-300 antialiased`}
      >
        {/* The Navbar now handles its own fixed positioning */}
        <Navbar />
        
        {/* Main content wrapper to ensure proper spacing below fixed Navbar */}
        <main className="min-h-screen relative overflow-hidden">
          {children}
        </main>

        <Footer />
        <FooterBottom />

        {/* Global Background Visual Detail (Optional) */}
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00D1FF]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00D1FF]/5 blur-[100px] rounded-full" />
        </div>
      </body>
    </html>
  );
}