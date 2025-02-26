import type { Metadata } from 'next';
import '../globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Magic UI',
  icons: {
    icon: "/icon.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="">
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </div>
  );
}
