import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400"]});
const content = ubuntuMono.className;

export const metadata = {
  title: "hello :3",
  description: "my personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={content}>
        {children}
      </body>
    </html>
  );
}
