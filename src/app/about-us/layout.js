import '../globals.css';

export const metadata = {
  title: "About Us | Durul Hair Oil by VITALIST",
  description:
    "Best hair oil in Pakistan.",
  metadataBase: new URL('https://durulhairoil.pk/'),
  alternates: {
    canonical: '/about-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
