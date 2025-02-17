import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";

import { Root } from "@/components/Root/Root";

import "@telegram-apps/telegram-ui/dist/styles.css";
import "normalize.css/normalize.css";
import "./_assets/globals.css";

import { Exo_2 } from "next/font/google"; // Import the desired font

const exo2 = Exo_2({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"], // Specify the subsets you need
});

export const metadata: Metadata = {
  title: "Robert Gamba",
  description: "this is TG mini app",
};

export const viewport: Viewport = {
  width: "device-width",
  height: "device-height",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={exo2.className}>
        <Root>{children}</Root>
      </body>
    </html>
  );
}
