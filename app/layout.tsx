import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Invoices-Manager',
  description: 'Next.js Invoices-Manager, built with App Router.',
  metadataBase: new URL('https://invoices-manager-xi.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
