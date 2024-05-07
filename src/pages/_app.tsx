import React from 'react';
import { AppProps } from 'next/app';

import '@/app/globals.css';
import RootLayout from '@/app/layout';
import { EthereumProvider } from '@/contexts/EthereumContext';
import { NetworkProvider } from '@/contexts/NetworkContext';
import { ProfileProvider } from '@/contexts/ProfileContext';
import NavBar from '@/components/NavBar';

/**
 * The root component of this application. It wraps all pages
 * with the context providers and a consistent layout.
 *
 * @param { Component, pageProps } - Current page and its properties.
 */
function ForeverMemoriesDapp({ Component, pageProps }: AppProps) {
  return (
    <EthereumProvider>
      <NetworkProvider>
        <ProfileProvider>
          <RootLayout>
            <NavBar />
            <Component {...pageProps} />
          </RootLayout>
        </ProfileProvider>
      </NetworkProvider>
    </EthereumProvider>
  );
}

export default ForeverMemoriesDapp;
