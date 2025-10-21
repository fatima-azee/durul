import '../globals.css';

export const metadata = {
  title: "Our Blogs | We Do Interior",
  description:
    "Explore expert interior design tips, trends, and project inspirations from Dubai and around the world.",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/blogs',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
