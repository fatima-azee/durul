import '../globals.css';

export const metadata = {
  title: "About Us | Dice Hospitality",
  description:
    "Best restaurant hospitality company in Dubai. We are offering professional services of F&B and restaurant services. Contact us today!",
  metadataBase: new URL('https://dicehospitality.ae/'),
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
