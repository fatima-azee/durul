import '../globals.css';

export const metadata = {
  title: "Contact Us | Dice Hospitality Dubai, UAE",
  description:
    "Dice hospitality, No.1 Restaurant & F&B hospitality company, Dubai, UAE",
  metadataBase: new URL('https://dicehospitality.ae/'),
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
