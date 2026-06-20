import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-open-sans",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Lê Đức Tiến — Mobile Developer",
  description:
    "CV · Kỹ sư Mobile Lead · iOS · Flutter · Team Lead · 12+ năm kinh nghiệm",
  icons: {
    icon: `${basePath}/images/logo.png`,
    apple: `${basePath}/images/logo.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
