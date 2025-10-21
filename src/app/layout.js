import "./globals.css";

export const metadata = {
  title: "Durul Hair Oil",
  description: "Durul Hair Oil - Nourishment and strength for your hair.",
  metadataBase: new URL("https://durulhairoil.pk"), // ✅ Base domain
  openGraph: {
    title: "Durul Hair Oil | Premium Hair Care in Pakistan",
    description:
      "Durul Hair Oil strengthens, nourishes, and revitalizes your hair naturally. Scientifically proven formula for healthier, shinier hair.",
    url: "https://durulhairoil.pk",
    siteName: "Durul Hair Oil",
    images: [
      {
        url: "https://durulhairoil.pk/images/logo.svg", // ✅ Replace with your actual logo/banner
        width: 1200,
        height: 630,
        alt: "Durul Hair Oil Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Durul Hair Oil | Premium Hair Care in Pakistan",
    description:
      "Durul Hair Oil strengthens, nourishes, and revitalizes your hair naturally. Scientifically proven formula for healthier, shinier hair.",
    images: ["https://durulhairoil.pk/images/logo.svg"],
  },
  alternates: {
    canonical: "https://durulhairoil.pk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical Link */}
        <link rel="canonical" href="https://durulhairoil.pk" />

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
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Durul Hair Oil",
              url: "https://durulhairoil.pk",
              logo: {
                "@type": "ImageObject",
                url: "https://durulhairoil.pk/images/logo.svg",
                width: 600,
                height: 60,
              },
              sameAs: [
                "https://www.instagram.com/durulhairoil",
                "https://www.facebook.com/durulhairoil",
              ],
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Durul Hair Oil",
              url: "https://durulhairoil.pk",
              description:
                "Durul Hair Oil strengthens, nourishes, and revitalizes your hair naturally. Scientifically proven formula for healthier, shinier hair.",
            }),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Durul Hair Oil",
              image: "https://durulhairoil.pk/images/product.png",
              description:
                "Premium Durul Hair Oil for stronger, shinier, and healthier hair. Scientifically formulated with natural ingredients.",
              brand: {
                "@type": "Brand",
                name: "Durul",
              },
              sku: "DHO-001",
              offers: {
                "@type": "Offer",
                url: "https://durulhairoil.pk",
                priceCurrency: "PKR",
                price: "1200",
                availability: "http://schema.org/InStock",
              },
            }),
          }}
        />

        {/* Site Navigation Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  position: 1,
                  name: "About Us",
                  url: "https://durulhairoil.pk/about-us",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "Shop",
                  url: "https://durulhairoil.pk/shop",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Technology",
                  url: "https://durulhairoil.pk/technology",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 4,
                  name: "Contact Us",
                  url: "https://durulhairoil.pk/contact-us",
                },
              ],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://durulhairoil.pk",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
