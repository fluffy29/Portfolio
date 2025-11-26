import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "A high-end portfolio for a junior full-stack developer.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Portfolio", "Web Development", "TypeScript"],
  openGraph: {
    title: "Portfolio | Full-Stack Developer",
    description: "A high-end portfolio for a junior full-stack developer.",
    url: "https://portfolio.example.com",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Full-Stack Developer",
    description: "A high-end portfolio for a junior full-stack developer.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
