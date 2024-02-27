import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Dashboard | Employee Management System",
    template: "%s | Employee Management System",
  },
  description: "Generated by Sabbir",
  // icons: {
  //   icon: ["/d.png"],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
