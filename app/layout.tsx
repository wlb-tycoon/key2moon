import { Montserrat } from "next/font/google";
import Head from "next/head";
import { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Key2Moon",
  description: "Creative Web3 Agency to your next project",
  keywords: "key2moon, web3, creative agency, blockchain, advisisory, industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-white">
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js" defer></script>
      </body>
    </html>
  );
}
