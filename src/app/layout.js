import './globals.css';

export const metadata = {
  title: 'Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality',
  description:
    'Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.',
  metadataBase: new URL('https://dicehospitality.ae/'), // ✅ Fixed: no trailing slash
  openGraph: {
    title: 'Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality',
    description:
      'Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.',
    url: 'https://dicehospitality.ae/',
    siteName: 'dice hospitality',
    images: [
      {
        url: 'https://dicehospitality.ae/images/logo.svg', // ✅ Absolute URL
        width: 1200,
        height: 630,
        alt: 'Dice Hospitality Banner',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant Hospitality Dubai | Luxury F&B Services | Dice Hospitality',
    description:
      'Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.',
    images: ['https://dicehospitality.ae/images/logo.svg'],
  },
  alternates: {
    canonical: 'https://dicehospitality.ae/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Manual Canonical Override (Backup Fix) */}
        <link rel="canonical" href="https://dicehospitality.ae/" />

        {/* Robots Meta Tag */}
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'dice hospitality',
              url: 'https://dicehospitality.ae/',
              logo: {
                '@type': 'ImageObject',
                url: 'https://dicehospitality.ae/images/logo.svg',
                width: 600,
                height: 60,
              },
              sameAs: [
                'https://www.instagram.com/yourprofile',
                'https://www.facebook.com/yourprofile',
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              name: 'dice hospitality',
              url: 'https://dicehospitality.ae/',
              description:
                'Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.',
            }),
          }}
        />

        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: 'Modern Restaurant Hospitality in Dubai',
              description:
                'Explore expert restaurant design tips, trends, and project inspirations from Dubai and around the world.',
              url: 'https://dicehospitality.ae/',
              author: {
                '@type': 'Organization',
                name: 'dice hospitality',
              },
              publisher: {
                '@type': 'Organization',
                name: 'dice hospitality',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://dicehospitality.ae/images/logo.svg',
                  width: 600,
                  height: 60,
                },
              },
              mainEntityOfPage: 'https://dicehospitality.ae/',
              image: {
                '@type': 'ImageObject',
                url: 'https://dicehospitality.ae/images/logo.svg',
                width: 1200,
                height: 630,
              },
              datePublished: '2025-06-22',
            }),
          }}
        />

        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: [
                {
                  '@type': 'SiteNavigationElement',
                  position: 1,
                  name: 'About Us',
                  url: 'https://dicehospitality.ae/about-us',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 2,
                  name: 'Restaurant Design',
                  url: 'https://dicehospitality.ae/restaurant-design',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 3,
                  name: 'Kitchen Fit-Out',
                  url: 'https://dicehospitality.ae/kitchen-fit-out',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 4,
                  name: 'Gallery',
                  url: 'https://dicehospitality.ae/projects',
                },
                {
                  '@type': 'SiteNavigationElement',
                  position: 5,
                  name: 'Contact Us',
                  url: 'https://dicehospitality.ae/contact-us',
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://dicehospitality.ae/',
                },
              ],
            }),
          }}
        />

        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Restaurant Hospitality and Fit Out',
              provider: {
                '@type': 'Organization',
                name: 'dice hospitality',
                url: 'https://dicehospitality.ae',
              },
              areaServed: {
                '@type': 'Place',
                name: 'Dubai, UAE',
              },
              url: 'https://dicehospitality.ae/',
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
