import './globals.css';

export const metadata = {
  title: 'KopiKita - Nikmati Kopi Kita',
  description: 'Menghadirkan kopi premium terbaik dari seluruh Indonesia dengan kualitas terjamin.',
  keywords: 'kopi, arabica, premium, indonesia, gayo, toraja, kintamani',
  authors: [{ name: 'KopiKita' }],
  viewport: 'device-width, initial-scale=1, maximum-scale=5',
  initialScale: 1,
  openGraph: {
    title: 'KopiKita - Kopi Kita',
    description: 'Solusi kopi premium untuk pengalaman terbaik',
    type: 'website',
    locale: 'id_ID',
    siteName: 'KopiKita',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}