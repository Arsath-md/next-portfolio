import { Geist, Geist_Mono } from "next/font/google";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MD Arsath Portfolio",
  description: "Full Stack Developer Portfolio",
  icons: {
    icon: "/real.png",
    shortcut: "/real.png",
    apple: "/real.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-matrix-bg ">{children}</body>
    </html>
  );
}
