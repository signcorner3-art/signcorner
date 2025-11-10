import "./globals.css";
import type { Metadata } from "next";
import CursorFollower from "../app/components/CursorFollower";

export const metadata: Metadata = {
  title: "Custom Cursor Follower",
  description: "Smooth white ring cursor follower effect",
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