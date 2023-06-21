import "./globals.css";
import { Source_Code_Pro } from "next/font/google";

const sourceSansPro = Source_Code_Pro({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  icons: { icon: "https://example.com/icon.png" },
  title: "eiericksilva.dev",
  description: "Criado por Erick Oliveira",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={sourceSansPro.className}>{children}</body>
    </html>
  );
}
