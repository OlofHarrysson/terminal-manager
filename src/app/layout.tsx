import "../styles/main.css";
import "../styles/olof-theme.css";
import "../styles/workspace.css";
import "@xterm/xterm/css/xterm.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Terminal Manager",
  description: "Host-native multi-project service runner with shared terminals",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icons/terminal-manager-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/terminal-manager-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icons/terminal-manager-192.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body data-theme="olof">
        {children}
      </body>
    </html>
  );
}
