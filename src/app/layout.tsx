import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/styles/globals.css";
import { Metadata } from "next";
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  FAVICON_PATH_LIST,
  INTER_FONT,
} from "@/constants/globals.constants";
import { GlobalLayout } from "@/contexts/account-context/GlobalLayout";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: FAVICON_PATH_LIST.icon,
    shortcut: FAVICON_PATH_LIST.shortcut,
    apple: FAVICON_PATH_LIST.apple,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${INTER_FONT.variable} antialiased`}>
        <AntdRegistry>
          <GlobalLayout>{children}</GlobalLayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
