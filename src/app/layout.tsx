import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://annabellekaenchanh.github.io"),
  title: "Annabelle Kaenchanh — Software Engineer",
  description:
    "Personal portfolio of Annabelle Kaenchanh, a Software Engineer building reliable, scalable systems.",
  openGraph: {
    title: "Annabelle Kaenchanh — Software Engineer",
    description:
      "Personal portfolio of Annabelle Kaenchanh, a Software Engineer building reliable, scalable systems.",
    url: "https://annabellekaenchanh.github.io",
    siteName: "Annabelle Kaenchanh",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Annabelle Kaenchanh — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annabelle Kaenchanh — Software Engineer",
    description:
      "Personal portfolio of Annabelle Kaenchanh, a Software Engineer building reliable, scalable systems.",
    images: ["/og.png"],
  },
};

const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
