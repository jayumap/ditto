import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:       'Ditto — Find Your Dev Twin',
  description: 'Paste your GitHub profile and find the developer on the internet who codes exactly like you.',
  openGraph: {
    title:       'Ditto — Find Your Dev Twin',
    description: 'Find the stranger who codes exactly like you.',
    type:        'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}