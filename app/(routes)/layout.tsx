import { Abhaya_Libre, IBM_Plex_Sans } from 'next/font/google';

import type { Metadata } from 'next';
import '../globals.css';

const abhayaLibre = Abhaya_Libre({
  variable: '--font-abhaya-libre',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Planned Group',
  description: 'Planned Group',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${abhayaLibre.variable} ${ibmPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
