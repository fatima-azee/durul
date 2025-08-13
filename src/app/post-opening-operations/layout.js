import '../globals.css';

export const metadata = {
  title: "Home Interior Design Dubai | We Do Interior",
  description:
    "Elevate your home interior design with one of the best interior companies in Dubai. Browse our website and Book FREE consultation now with we do interior!",
  metadataBase: new URL('https://wedointerior.ae/'),
  alternates: {
    canonical: '/home-interior-design-dubai',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
