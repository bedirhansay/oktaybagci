import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "../globals.scss";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oktay Bağcı",
  description: "Oktay Bagci Hair Designer",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
        {/* <strong className="absolutes text-4xl text-center">
          {" "}
          Server Error. Please Contact Your Developer Team.
        </strong> */}
      </body>
    </html>
  );
}
