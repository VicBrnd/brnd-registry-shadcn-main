import { McpSetup } from "@/components/mcp-setup";
import { ModeToggle } from "@/components/mode-toggle";
import { Providers } from "@/components/providers";
import { Logo } from "@/registry/brnd/branding/logo";
import { Separator } from "@/registry/brnd/ui/separator";
import { Toaster } from "@/registry/brnd/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "Brnd";
const description = "A example registry for distributing code using shadcn.";

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
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <header>
            <div className="max-w-7xl mx-auto flex items-center px-4 py-6">
              <div className="flex items-center gap-4">
                <Link href="/">
                  <div className="flex items-center gap-2">
                    <Logo className="size-5" />
                    <span className="text-lg font-medium font-mono">Brnd</span>
                  </div>
                </Link>
                <Separator orientation="vertical" className="!h-6" />
                <p className="text-muted-foreground hidden md:block line-clamp-1 text-sm">
                  An brnd registry for distributing code using shadcn.
                </p>
              </div>
              <div className="ml-auto flex gap-2">
                <McpSetup />
                <ModeToggle />
              </div>
            </div>
          </header>
          {children}
          <Toaster position="top-center" />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
