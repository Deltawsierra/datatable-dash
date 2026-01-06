'use client';

import { ConfigProvider, App as AntApp } from 'antd';
import './globals.css';

const theme = {
  token: {
    colorPrimary: '#1677ff',
    borderRadius: 6,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  components: {
    Layout: {
      siderBg: '#f5f5f5',
      headerBg: '#ffffff',
    },
    Menu: {
      itemBg: 'transparent',
      subMenuItemBg: 'transparent',
    },
    Table: {
      headerBg: '#fafafa',
      rowHoverBg: '#f5f5f5',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RDM Dashboard - Reference Data Management</title>
        <meta name="description" content="Reference Data Management Dashboard for viewing and managing data tables" />
      </head>
      <body>
        <ConfigProvider theme={theme}>
          <AntApp>
            {children}
          </AntApp>
        </ConfigProvider>
      </body>
    </html>
  );
}
