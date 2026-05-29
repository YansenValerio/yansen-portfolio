import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yansen Valerio — Product Designer",
  description:
    "Portfolio of Yansen Valerio, a senior product designer specializing in UI/UX, brand identity, and digital product design.",
  openGraph: {
    title: "Yansen Valerio — Product Designer",
    description:
      "Portfolio of Yansen Valerio, a senior product designer specializing in UI/UX, brand identity, and digital product design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
