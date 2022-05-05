import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Script from 'next/script';

const Noop: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>{children}</>
);

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <React.Fragment>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-GKZ0NTM0HD`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GKZ0NTM0HD', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </React.Fragment>
  );
}

export default MyApp;
