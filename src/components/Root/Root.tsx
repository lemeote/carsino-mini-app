"use client";

import { type PropsWithChildren, useEffect, useMemo, useState } from "react";
import {
  SDKProvider,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
} from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { AppRoot } from "@telegram-apps/telegram-ui";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ErrorPage } from "@/components/ErrorPage";
import { useTelegramMock } from "@/hooks/useTelegramMock";
import { useDidMount } from "@/hooks/useDidMount";

import "./styles.css";

function App(props: PropsWithChildren) {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport?.expand() && bindViewportCSSVars(viewport);
  }, [viewport]);

  if (!viewport?.isExpanded) {
    viewport?.expand();
  }

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      {props.children}
    </AppRoot>
  );
}

function RootInner({ children }: PropsWithChildren) {
  // Mock Telegram environment in development mode if needed.
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock();
  }

  const debug = useLaunchParams().startParam === "debug";
  const manifestUrl = 'https://gateway.pinata.cloud/ipfs/QmU19JVJL87iZfcWKutYrEL71W4umZWMGSLneSYapJjVM5'

  // Enable debug mode to see all the methods sent and events received.
  useEffect(() => {
    if (debug) {
      import("eruda").then((lib) => lib.default.init());
    }
  }, [debug]);

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <SDKProvider acceptCustomStyles debug={debug}>
        <App>{children}</App>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount();

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="root__loading">Loading</div>
  );
}
