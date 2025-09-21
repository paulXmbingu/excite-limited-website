import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { RouteProvider } from "@/providers/router-provider";
import { Theme } from "@/providers/theme";
import "@/styles/globals.css";
import { cx } from "@/utils/cx";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Excite! Innovation Limited",
    template: "%s | Excite! Innovation Limited",
  },
  description:
    "Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering.",
  keywords: [
    "UIUX",
    "Design",
    "Software Engineering",
    "Product Innovation",
    "Excite! Innovation Limited",
  ],
  authors: [{ name: "Excite! Innovation Limited" }],
  openGraph: {
    title: "Excite! Innovation Limited",
    description:
      "Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering.",
    url: "https://excite.company",
    siteName: "Excite! Innovation Limited",
    images: [
      {
        url: "https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg",
        width: 1200,
        height: 630,
        alt: "Excite! Innovation Limited",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excite! Innovation Limited",
    description:
      "Premier digital product innovation company specializing in UIUX Research, Design & Software Engineering.",
    images: [
      "https://res.cloudinary.com/excit3/image/upload/v1727720945/Excite%20Company%20Website/File_Cover_kleht5.jpg",
    ],
    creator: "@ExciteCompany",
  },
  metadataBase: new URL("https://excite.company"),
};

export const viewport: Viewport = {
  themeColor: "#fff",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(inter.variable, "bg-primary antialiased")}>
        <RouteProvider>
          <Theme>{children}</Theme>
        </RouteProvider>
      </body>
    </html>
  );
}
