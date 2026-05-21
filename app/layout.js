import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next'; // 1. TAMBAHKAN BARIS INI

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights /> {/* 2. TAMBAHKAN BARIS INI */}
      </body>
    </html>
  );
}
