import "./globals.css";
import type { Metadata } from "next";
import CursorFollower from "../app/components/CursorFollower";

export const metadata: Metadata = {
  title: "SingCorner",
  description: "Your Brand Visibility Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        {/* 👇 Global cursor follower */}
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}