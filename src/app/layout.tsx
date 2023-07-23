import NavBar from '@/components/layout/NavBar';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'ModularImageAnalysis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <NavBar />
        <main className="flex flex-1 p-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
