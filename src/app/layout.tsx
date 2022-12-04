import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="mx-auto h-screen max-w-5xl transition-all dark:bg-black">
        {children}
      </body>
    </html>
  );
}
