import React from "react";
import { Inter } from "next/font/google";

const interInstance = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={interInstance.className}>
        {children}
      </body>
    </html>
  );
}
