import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_Thai,
  Poppins,
  Prompt,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/contexts/settingsContext";
import { ThemeProvider } from "next-themes";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-thai",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-prompt",
});

export const metadata: Metadata = {
  title: {
    default: "Krittaphat | Portfolio",
    template: "%s | Krittaphat",
  },
  description: "Full-stack developer portfolio",
  openGraph: {
    title: "Krittaphat | Portfolio",
    description:
      "Full-stack developer skilled in Next.js, Express, and Tailwind CSS",
    url: "https://portfolio-smoky-tau-91.vercel.app/",
    siteName: "Krittaphat Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dgfwfpxvg/image/upload/v1760896987/drilldown3_rfbxs7.jpg",
        width: 1200,
        height: 630,
        alt: "Krittaphat Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansThai.className} scroll-smooth antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SettingsProvider>{children}</SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
