import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Karan Singh Asoliya | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Cybersecurity, C#, SQL, and modern web technologies. MIT Reality Hack participant.",
  keywords: [
    "Full Stack Developer",
    "Cybersecurity",
    "C#",
    "SQL",
    "React",
    "Next.js",
    "MIT Reality Hack",
  ],
  authors: [{ name: "Karan Singh Asoliya" }],
  openGraph: {
    title: "Karan Singh Asoliya | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Cybersecurity, C#, SQL, and modern web technologies.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
