'use client';

import Sidebar from './Sidebar';
import Header from './Header';
import { ReactNode } from 'react';

export default function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
