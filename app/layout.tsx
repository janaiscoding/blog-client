import "./globals.css";

export const metadata = {
  title: `JanaIsCoding's Blog`,
  description:
    "A blog client for displaying a backend REST API + CRUD application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
