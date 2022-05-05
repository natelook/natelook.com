import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';

const Noop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
