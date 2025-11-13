import type { Metadata, Viewport } from 'next';
import { getDictionary } from '@/lib/dictionaries';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Samuel Muabia Planet - Software Engineer Portfolio',
    description: 'Software Engineer | Full-Stack & Mobile Automation Specialist',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'en' | 'de');

  return (
    <html lang={lang}>
      <body>
        <Navbar dict={dict} />
        <main>{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}

