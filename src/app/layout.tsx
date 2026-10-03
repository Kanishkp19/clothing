import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "LUXORA — Curated Fashion & Handcrafted Style",
  description:
    "LUXORA crafts timeless fashion silhouettes in sustainable linen, organic cotton, silk and wool. Discover luxury dresses, tops, outerwear, bottoms & accessories.",
  keywords: [
    "LUXORA",
    "luxury fashion",
    "boutique clothing",
    "dresses",
    "tops",
    "outerwear",
    "blazers",
    "sustainable fashion",
    "handcrafted clothing",
  ],
  authors: [{ name: "LUXORA" }],
  openGraph: {
    title: "LUXORA — Curated Fashion & Handcrafted Style",
    description:
      "Timeless fashion silhouettes, curated fabrics & sustainable luxury designed in Mumbai.",
    siteName: "LUXORA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXORA — Curated Fashion & Handcrafted Style",
    description:
      "Timeless fashion silhouettes, curated fabrics & sustainable luxury designed in Mumbai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster position="bottom-right" richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
