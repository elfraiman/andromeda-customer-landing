import { ReactNode } from 'react';
import ClientProviders from "./ClientProviders";
import "./globals.css";



export const metadata = {
  title: 'רישום לקוח',
  description: 'אנדרומדה',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
