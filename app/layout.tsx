import "./styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Container from "@/app/components/Container";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stylna Kachka",
  description: "Інтернет-магазин одягу європейських брендів",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <Header />
        <main>
          <Container>{children}</Container>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
