import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';

import { Root } from '@/components/Root/Root';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';

import { Exo_2 } from 'next/font/google'; // Import the desired font

const exo2 = Exo_2({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={exo2.className}>
      <Root>
        {children}
      </Root>
    </body>
    </html>
  );
}
