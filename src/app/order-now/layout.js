import '../globals.css';

export const metadata = {
  title: "Order Now | Durul Hair Oil",
  description:
    "Durul Hair Oil, No.1 Hair Oil solution in Pakistan",
  metadataBase: new URL('https://durulhairoil.pk/'),
  alternates: {
    canonical: '/contact-us',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
