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
        className={`${poppins.className} transition mx-auto h-screen max-w-5xl dark:bg-[#121212]`}
      >
        {children}
      </body>
    </html>
  );
}
