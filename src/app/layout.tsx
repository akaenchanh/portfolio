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
  metadataBase: new URL("https://akaenchanh.github.io/portfolio"),
  title: "Annabelle Kaenchanh — Data Scientist | Web Developer",
  description:
    "Personal portfolio of Annabelle Kaenchanh, a Data Scientist and Web Developer specialized in AI, machine learning, and full-stack development.",
  openGraph: {
    title: "Annabelle Kaenchanh — Data Scientist | Web Developer",
    description:
      "Personal portfolio of Annabelle Kaenchanh, a Data Scientist and Web Developer specialized in AI, machine learning, and full-stack development.",
    url: "https://akaenchanh.github.io/portfolio",
    siteName: "Annabelle Kaenchanh",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Annabelle Kaenchanh — Data Scientist | Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annabelle Kaenchanh — Data Scientist | Web Developer",
    description:
      "Personal portfolio of Annabelle Kaenchanh, a Data Scientist and Web Developer specialized in AI, machine learning, and full-stack development.",
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
