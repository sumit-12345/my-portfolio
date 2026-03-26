import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Name | Spring Boot, Kubernetes, Docker, AI Developer",
  description: "Portfolio by Your Name. Full-stack Java/Kubernetes/Docker engineer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <main className="min-h-screen px-4 pt-20 md:px-8 lg:px-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
