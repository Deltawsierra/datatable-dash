import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RDM Dashboard - Reference Data Management',
  description: 'Reference Data Management Dashboard for viewing and managing data tables',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
