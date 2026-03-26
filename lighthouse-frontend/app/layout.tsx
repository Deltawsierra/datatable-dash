import type { Metadata } from 'next';
import './globals.css';
import { getThemeScript } from '@/lib/themeScript';

export const metadata: Metadata = {
  title: 'RDM Lighthouse - Reference Data Management',
  description: 'Reference Data Management Dashboard by Genworth Data Governance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
