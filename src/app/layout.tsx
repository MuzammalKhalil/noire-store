import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/context/StoreContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'NOIRÉ — Objects of Distinction | Luxury E-Commerce',
  description:
    'Haute Horlogerie, handcrafted Tuscan leather goods, and architectural Japanese titanium eyewear. Handcrafted in limited series.',
  keywords: [
    'NOIRÉ',
    'Luxury Watches',
    'Haute Horlogerie',
    'Tuscan Leather',
    'Titanium Eyewear',
    'Designer Accessories',
  ],
  authors: [{ name: 'NOIRÉ Atelier' }],
  openGraph: {
    title: 'NOIRÉ — Objects of Distinction',
    description: 'Haute Horlogerie, handcrafted Tuscan leather goods, and architectural Japanese titanium eyewear.',
    type: 'website',
    locale: 'en_US',
    siteName: 'NOIRÉ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-ivory font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-gold selection:text-background">
        <StoreProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}

