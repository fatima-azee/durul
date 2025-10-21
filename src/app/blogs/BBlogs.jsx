"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp, FaLink } from "react-icons/fa";

// Blog Data
const blogPosts = [
  {
    title: "Modern Apartment Interior Design",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog1.webp",
    link: "/modern-apartment-interior-design",
  },
  {
    title: "WEDO’S SECRET DESIGN RECIPE DUBAI DESIGN 2025",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog2.webp",
    link: "/blog2",
  },
  {
    title: "THE ART OF MARBLE, AS WE DO MAGIC",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog3.webp",
    link: "/blog3",
  },
];

const Blogs = () => {
  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  const shareBlog = (platform, link) => {
    let url = "";
    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case "instagram":
        url = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
        break;
      case "pinterest":
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(link)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(link)}`;
        break;
    }
    window.open(url, "_blank");
  };

  return (
    <section className="bg-black text-white py-20 min-h-screen">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        <h1 className="text-center text-white text-xl sm:text-2xl mb-10 font-conthrax tracking-widest uppercase">
          All Blogs
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <div className="bg-gradient-to-br from-[#caa193] to-[#a0624d] p-[1px] rounded-md transition-transform duration-500 hover:scale-105 cursor-pointer">
                <div className="bg-black p-4 rounded-md flex flex-col h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="rounded w-full h-auto object-cover"
                  />

                  <div className="mt-3 flex flex-col flex-grow">
                    {/* Header: Title + Published */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xs text-[#caa193] font-conthrax uppercase leading-snug w-[70%] break-words line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="flex flex-col items-end w-[30%] text-xs text-white font-play ml-2">
                        <span className="opacity-70">Published:</span>
                        <span>{post.date.replace("Published: ", "")}</span>
                        <div className="mt-1">
                          <Image src="/images/blog-icon.svg" alt="Blog Icon" width={18} height={18} />
                        </div>
                      </div>
                    </div>

                    {/* Excerpt */}
                    <p className="text-sm text-gray-300 mb-4 leading-relaxed mt-1 font-play">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="text-right mt-auto">
                      <span className="text-white text-sm font-play">
                        Read More <span className="text-base">{'\u00BB'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Share + Copy */}
                  <div className="mt-6 pt-4 flex items-center justify-between text-xs">
                    <span
                      onClick={() => copyLink(post.link)}
                      className="text-[#caa193] flex items-center gap-2 font-conthrax cursor-pointer"
                    >
                      COPY LINK <FaLink className="bg-[#caa193] text-black rounded p-[2px]" />
                    </span>

                    <div className="flex items-center gap-2 text-[#caa193]">
                      <span className="font-conthrax">SHARE</span>
                      <FaFacebookF
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("facebook", post.link)}
                      />
                      <FaInstagram
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("instagram", post.link)}
                      />
                      <FaPinterestP
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("pinterest", post.link)}
                      />
                      <FaWhatsapp
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog("whatsapp", post.link)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
