import React from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    href: "home-interior-design-dubai/luxury-apartment-interior-design-in-palm-jumeirah",
    src: "/images/luxury-apartment-design-dubai-marina.jpg",
    alt: "Luxury Apartment Interior Palm Jumeirah",
    title: "LUXURY APARTMENT DESIGN PALM IN JUMEIRAH DUBAI",
    description: "Explore our latest interior design project Atlantis The Royal Duplex. Our interior design project idea was inspired from underwater aquatic life. Discover how we transformed this space into an underwater oasis of comfort and sophistication and proved that we are among the best interior design companies in Dubai. Contact We Do Interiors if you want to design your space.",
    imageStyles: { borderTopLeftRadius: '2rem' }
  },
  {
    href: "home-interior-design-dubai/apartment-interior-design-in-dubai-marina",
    src: "/images/premium-apartment-interior-design-palm-jumeirah-dubai.jpg",
    alt: "Premium Apartment Dubai Marina",
    title: "PREMIUM APARTMENT INTERIOR DESIGN DUBAI MARINA, DUBAI",
    description: "We Do Interior Design & Fitout was excited to be part of the amazing Atlantis The Royal project in Dubai! Our skilled home interior designers created beautiful interiors that feel both luxurious and lavish. Atlantis The Royal demonstrates We Do Interior Design's exceptional expertise in home interior design.",
  },
  {
    href: "home-interior-design-dubai/duplex-apartment-interior-design-near-atlantis-the-royal",
    src: "/images/ATRD (14.1).webp",
    alt: "Duplex Atlantis The Royal",
    title: "DUPLEX APARTMENT INTERIOR DESIGN NEAR ATLANTIS THE ROYAL",
    description: "Explore our latest interior design project Atlantis The Royal Duplex. Our interior design project idea was inspired from underwater aquatic life. Discover how we transformed this space into an underwater oasis of comfort and sophistication and proved that we are among the best interior design companies in Dubai.",
  },
  {
    href: "home-interior-design-dubai/apartment-interior-design-atlantis-the-royal",
    src: "/images/Residential (1).webp",
    alt: "Apartment Atlantis The Royal",
    title: "APARTMENT INTERIOR DESIGN ATLANTIS THE ROYAL",
    description: "We Do Interior Design & Fitout was excited to be part of the amazing Atlantis The Royal project in Dubai! Our skilled home interior designers created beautiful interiors that feel both luxurious and lavish. Atlantis The Royal demonstrates our exceptional expertise.",
  },
  {
    href: "home-interior-design-dubai/luxury-interior-design-in-emaar-beachfront",
    src: "/images/Residential (2).webp",
    alt: "Emaar Beachfront Interior",
    title: "LUXURY INTERIOR DESIGN IN EMAAR BEACHFRONT",
    description: "Our professional team of Interior Designers transformed a residence into a beachfront haven. The design embraces the iconic ocean views, creating a flawless flow between the interior and exterior scenes. With luxurious furniture, it strikes a perfect balance between relaxation and elegance.",
  },
  {
    href: "home-interior-design-dubai/royal-villa-interior-design-in-al-manara-dubai",
    src: "/images/Residential (3).webp",
    alt: "Royal Villa Al Manara",
    title: "ROYAL VILLA INTERIOR DESIGN IN AL MANARA DUBAI",
    description: "Experience modern luxury at the Manara Villa, Dubai. We transformed this residence, crafting a bespoke interior that reflects the owner's unique style. Maximise your space with our expert designers.",
  },
  {
    href: "home-interior-design-dubai/luxury-penthouse-interior-design-in-dafza-2w-dubai",
    src: "/images/Residential (4).webp",
    alt: "Luxury Penthouse DAFZA 2W",
    title: "LUXURY PENTHOUSE INTERIOR DESIGN IN DAFZA 2W DUBAI",
    description: "Soar above Dubai in ultimate style at the 2W Residence Penthouse. We created a sophisticated and inviting space that blends style and elegance with breathtaking views.",
  },
  {
    href: "home-interior-design-dubai/classic-villa-interior-design-in-jumeirah-beach-residence",
    src: "/images/Residential (5).webp",
    alt: "Villa Jumeirah Beach Residence",
    title: "MODERN VILLA INTERIOR DESIGN IN JUMEIRAH BEACH RESIDENCE",
    description: "Live an ideal life in your Jumeirah oasis. Our experts crafted a space where sophistication meets functionality. Discover the art of effortless luxury living.",
  },
  {
    href: "home-interior-design-dubai/modern-penthouse-interior-design-in-dafza-6w-dubai",
    src: "/images/Residential (6).webp",
    alt: "Modern Penthouse DAFZA 6W",
    title: "LUXURIOUS PENTHOUSE INTERIOR DESIGN IN DAFZA 6W DUBAI",
    description: "Explore amazing views of Dubai from your private penthouse paradise! Our team blended finishes and details to deliver a luxurious yet practical home.",
  },
  {
    href: "home-interior-design-dubai/apartment-interior-design-near-al-wasl-dubai",
    src: "/images/Residential (7).webp",
    alt: "Al Wasl Apartment Design",
    title: "APARTMENT INTERIOR DESIGN NEAR AL WASL DUBAI",
    description: "Escape the city's buzz and enter your tranquil haven. We redefined urban living with calming colors, textures, and personalized design for a peaceful lifestyle.",
  },
  {
    href: "home-interior-design-dubai/modern-villa-interior-design-majan-dubai",
    src: "/images/Residential (8).webp",
    alt: "Modern Villa Majan Dubai",
    title: "MODERN VILLA INTERIOR DESIGN MAJAN DUBAI",
    description: "Step into a world of Arabian luxury at the Majan Villa. We Do Interior Design created a home where desert charm meets timeless elegance.",
    imageStyles: { borderBottomLeftRadius: '2rem', borderBottomRightRadius: '2rem' }
  }
];

const ResidentialProjects = () => {
  return (
    <section id="projects" className="projects w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="relative px-2">
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.alt}
                width={700}
                height={300}
                className="w-full hover:transform hover:-translate-y-2 transition-transform duration-500"
                style={project.imageStyles || {}}
              />
              <div className="absolute top-18 bottom-24 left-0 w-full flex items-center justify-center">
                <div className="flex-grow mb-20 px-2">
                  <h2 className="text-[#121212] text-lg lg:text-lg font-semibold text-center bg-gray-200 bg-opacity-50 py-1.5 hover:text-[#c38d90]">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
            <div className="text-white text-sm mt-2 mb-4 sm:mb-0 relative">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResidentialProjects;
