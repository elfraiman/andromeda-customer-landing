import "./globals.css";
import { ReactNode } from 'react';
import ClientProviders from "./ClientProviders";
import { LandPageProvider } from "./context/LandPageContext";



export const metadata = {
  title: 'רישום לקוח',
  description: 'אנדרומדה',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <LandPageProvider>
          <ClientProviders>
            {children}
          </ClientProviders>
        </LandPageProvider>
      </body>
    </html>
  );
}
