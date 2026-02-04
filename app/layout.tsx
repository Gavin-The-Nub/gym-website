import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "G8 Fitness Gym | Elevated Greatness",
  description: "Transform your body and mind at G8 Fitness Gym. Experience premium fitness training, state-of-the-art equipment, and expert coaches. Elevate your greatness today!",
  keywords: ["gym", "fitness", "workout", "personal training", "G8 Fitness", "health", "strength training"],
  openGraph: {
    title: "G8 Fitness Gym | Elevated Greatness",
    description: "Transform your body and mind at G8 Fitness Gym. Experience premium fitness training with expert coaches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
