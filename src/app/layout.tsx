import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "rattad24",
  icons: {
    icon:"/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href={"/favicon.svg"} />
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
