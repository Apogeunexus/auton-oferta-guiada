import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oferta Guiada · Auton Health",
  description:
    "Tour didático e interativo da oferta Auton Health, em 16 passos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
