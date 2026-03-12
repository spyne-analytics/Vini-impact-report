import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vini AI Monthly Impact Report",
  description: "AI-powered monthly impact reporting for automotive dealerships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
