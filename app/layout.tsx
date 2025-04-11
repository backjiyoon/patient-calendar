export const metadata = {
  title: 'Patient Calendar',
  description: 'Calendar for managing patient tags',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
