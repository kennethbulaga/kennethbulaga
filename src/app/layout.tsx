import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fungela = localFont({
  src: "../../public/fonts/Angdiva Demo.otf",
  variable: "--font-fungela",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kenneth Bulaga",
  description:
    "4th-Year BSIT Student and Full Stack Developer based in Davao City. Specialized in accessible institutional systems.",
  keywords: [
    "Kenneth Bulaga",
    "Davao Developer",
    "Next.js",
    "SJP2CD",
    "Freelance",
    "Web Development",
    "Full Stack Developer",
    "React",
    "TypeScript",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fungela.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
