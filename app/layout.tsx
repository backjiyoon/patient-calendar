
// app/layout.tsx
export const metadata = {
  title: 'Patient Calendar',
  description: 'Patient management calendar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
