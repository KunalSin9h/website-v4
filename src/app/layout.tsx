import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`${poppins.className} mx-auto h-screen max-w-5xl transition-all dark:bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
