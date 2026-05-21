import { Analytics } from '@vercel/analytics/react'; // 1. TAMBAHKAN BARIS INI DI PALING ATAS

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics /> {/* 2. TAMBAHKAN BARIS INI DI SINI */}
      </body>
    </html>
  );
}
