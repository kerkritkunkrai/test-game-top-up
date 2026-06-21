import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/nav";
import { Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  icons: {
    icon: [
      {
        url: "/logo.jpg",
        type: "image/jpeg",
        sizes: "192x192",
      },
    ],
    shortcut: "/logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border bg-surface py-6">
          <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted sm:px-6">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
