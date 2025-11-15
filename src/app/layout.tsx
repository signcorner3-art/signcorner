import "./globals.css";
import type { Metadata } from "next";
import CursorFollower from "../app/components/CursorFollower";
import Header from "./components/Header";
import Footer from "./components/Footerx";

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
        {/* 👇 Global  cursor follower */}
        <CursorFollower />
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}