import type { Metadata } from 'next';
import '../globals.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Rattad24',
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
        <main className='pt-20'>{children}</main>
        <Footer />
      </div>
  );
}
