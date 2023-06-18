import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import State from "@/states/States";
import MouseFollow from "@/components/MouseFollow";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Computer Technical Skills",
  description: "Welcome to Computer Technical Skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          type="text/css"
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </Head>
      <body>
        <MouseFollow />
        <Navbar />
        <State>{children}</State>
        <Footer />
      </body>
    </html>
  );
}
