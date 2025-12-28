import type { Metadata } from "next";
import '@/app/assets/css/index.css';
import '@/app/assets/css/swiper-bundle.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />

        {children}

        {/* فوتر */}
        <Footer />
      </body>
    </html>
  );
}
