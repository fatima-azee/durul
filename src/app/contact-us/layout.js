import '../globals.css';

export const metadata = {
  title: "Contact Us | Durul Hair Oil, Pakistan",
  description:
    "Durul Hair Oil, No.1 Hair Oil in Pakistan",
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
