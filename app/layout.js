import { Analytics } from '@vercel/analytics/next';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
