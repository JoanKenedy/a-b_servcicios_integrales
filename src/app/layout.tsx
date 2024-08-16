import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo B&R ",
  description:
    "En Grupo B&R , nos apasiona ayudar a las personas a encontrar su hogar perfecto. Con años de experiencia en el mercado inmobiliario, nuestro equipo de expertos se compromete a brindar un servicio personalizado y profesional para satisfacer las necesidades de nuestros clientes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  );
}
