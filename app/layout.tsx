import '../styles/globals.css';

export const metadata = {
  title: 'AI Video Store',
  description: 'Browse and customize video templates',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
