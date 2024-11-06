import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Niklas Peterson — Product Designer and creator",
  description: "Niklas Peterson, Product Designer and creator from Sweden. Who brings creativity to life through pixels and code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full flex justify-center bg-white text-zinc-600 dark:bg-black dark:text-zinc-400`}
      >
        {children}
      </body>
    </html>
  );
}
