// src/app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Jagarti Sarana Telekomunikasi',
  description: 'Dashboard JST',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
