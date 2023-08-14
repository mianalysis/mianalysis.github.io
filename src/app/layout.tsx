import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'ModularImageAnalysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex min-h-[80vh] flex-1 py-16 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
