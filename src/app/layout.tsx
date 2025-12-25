import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Exo_2 } from "next/font/google";
import { SmoothCursor } from "@/components/magicui/SmoothCursor";

const exo2 = Exo_2({
  subsets: ["latin", "vietnamese", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "Mohammad | Frontend Developer Portfolio",
  description:
    "Explore Mohammad's portfolio – a skilled Frontend Developer specializing in Next.js, React, and modern web technologies. Showcasing innovative projects, UI/UX expertise, and high-performance web applications.",
  keywords: [
    "Mohammad",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Web Development",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "Modern Web Technologies",
  ],
  openGraph: {
    title: "Mohammad | Frontend Developer Portfolio",
    description:
      "Discover Mohammad's expertise in Frontend Development, React, and Next.js. View projects, case studies, and technical skills.",
    url: "https://m-mohammad-d.vercel.app",
    type: "website",
    images: [
      {
        url: "https://via.placeholder.com/1200x630.png?text=Mohammad+Portfolio",
        width: 1200,
        height: 630,
        alt: "Mohammad - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad | Frontend Developer Portfolio",
    description:
      "Explore Mohammad's frontend projects and expertise in React, Next.js, and modern web development.",
    images: [
      "https://via.placeholder.com/1200x630.png?text=Mohammad+Portfolio",
    ],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${exo2.variable} antialiased scroll-smooth  dark:bg-[url('/topography.svg')] bg-repeat w-full max-w-dvw overflow-x-hidden`}
      >
        <SmoothCursor />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
