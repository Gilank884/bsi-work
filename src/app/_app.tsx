// pages/_app.tsx
import './globals.css';
import type { AppProps } from 'next/app';
import Layout from './layout';

export default function App({ Component, pageProps, router }: AppProps & { router: any }) {
  const noLayoutPages = ['/login']; // bisa tambahkan '/register', dll

  if (noLayoutPages.includes(router.pathname)) {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
