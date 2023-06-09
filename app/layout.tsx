import "./globals.css";
import { Inter } from "next/font/google";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/tailwind.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <title>Next.Js-Graphql-Tailwind</title>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
