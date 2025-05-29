import { MainLayout } from "@/components/layout/main-layout";
import { Providers } from "@/components/providers";
import { Toaster } from "@/registry/brnd/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

const title = "Brnd";
const description = "A registry for distributing code using shadcn.";

export const metadata: Metadata = {
  title: {
    default: `${title} | ${description}`,
    template: "%s | Brnd",
  },
  description,
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
  manifest: `${process.env.NEXT_PUBLIC_BASE_URL}/site.webmanifest`,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
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
        className={`${GeistSans.variable} ${GeistMono.variable} h-full font-sans antialiased`}
      >
        <Providers>
          <MainLayout>{children}</MainLayout>
          <Toaster position="top-center" />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
