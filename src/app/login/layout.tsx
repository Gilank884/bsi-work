// src/app/login/layout.tsx
import '../../styles/globals.css';
import { ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>{children}</> // cukup render children tanpa html/body
  );
}
