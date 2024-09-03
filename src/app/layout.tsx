import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ACM UTA",
  description: "ACM UTA Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[radial-gradient(1504px_1068px_at_100%_0%,_var(--tw-gradient-stops))] from-[#14a2d5] from-0% via-[#043b65] via-0%  to-[#14a2d5] to-100%">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
