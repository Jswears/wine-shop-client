import "./global.scss";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthContextWrapper } from "@/context/auth.context";

export const metadata: Metadata = {
  title: "Vinotique.",
  description: "Vinotique is a wine shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <AuthContextWrapper>
        <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
      </AuthContextWrapper>
    </html>
  );
}
