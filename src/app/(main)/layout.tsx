// src/app/(main)/layout.tsx (SERVER COMPONENT)
import { ReactNode } from 'react';
import LayoutClient from '../../components/LayoutClient';

export const metadata = {
  title: 'Dashboard - Jagarti Sarana Telekomunikasi',
  description: 'Halaman dashboard utama JST',
};

export default function MainLayout({ children }: { children: ReactNode }) {
  return <LayoutClient>{children}</LayoutClient>;
}
