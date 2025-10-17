"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp, FaLink } from "react-icons/fa";
import Link from "next/link";

// Blog data with links to separate pages for each blog
const blogPosts = [
  {
    title: "THE MAGIC OF BLACK & COPPER",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog1.webp",
    link: "/blog1",
  },
  {
    title: "WEDO’S SECRET DESIGN RECIPE",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog2.webp",
    link: "/blog2",
  },
  {
    title: "THE ART OF MARBLE, AS WE",
    date: "Published: 25.05.2025",
    excerpt:
      "Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet...",
    image: "/images/blog3.webp",
    link: "/blog3",
  },
];

// Helper to break title after first two words
const splitTitle = (title) => {
  const words = title.split(" ");
  return (
    <>
      {words.slice(0, 2).join(" ")} <br />
      {words.slice(2).join(" ")}
    </>
  );
};

const Blogs = () => {
  // Function to copy the blog post URL
  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  // Function to share the blog on social media
  const shareBlog = (platform, link) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
        break;
      case 'instagram':
        url = `https://www.instagram.com/?url=${encodeURIComponent(link)}`;
        break;
      case 'pinterest':
        url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(link)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(link)}`;
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  };

  return (
    <section id="blogs" className="bg-black text-white py-20">
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto">
        {/* Arrow image */}
        <div className="flex justify-center">
          <Image
            src="/images/sec-dvd.webp"
            alt="Scroll down arrow"
            width={320}
            height={80}
            className="h-auto w-48 sm:w-64"
          />
        </div>

        {/* Section Heading */}
        <h2 className="text-white mt-10 mb-10 text-sm sm:text-xl tracking-widest font-conthrax text-center">
          OUR BLOGS
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index}>
              <div
                className="bg-gradient-to-br from-[#caa193] to-[#a0624d] p-[1px] rounded-md transition-transform duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="bg-black p-4 rounded-md flex flex-col h-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="rounded w-full h-auto object-cover"
                  />

                  {/* Blog Content */}
                  <div className="mt-3 flex flex-col flex-grow">
                    <div className="flex items-start justify-between mb-1">
                      {/* Title */}
                      <h3 className="text-xs text-[#caa193] font-conthrax uppercase leading-snug">
                        {splitTitle(post.title)}
                      </h3>

                      {/* Date & Icon */}
                      <div className="text-right ml-4">
                        <span className="text-xs text-white font-play">{post.date}</span>
                        <div className="flex justify-end mt-1">
                          <Image
                            src="/images/blog-icon.svg"
                            alt="Blog Icon"
                            width={18}
                            height={18}
                          />
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

                  {/* Share Footer */}
                  <div className="mt-6 pt-4 flex items-center justify-between text-xs">
                    <span
                      onClick={() => copyLink(post.link)}
                      className="text-[#caa193] flex items-center gap-2 font-conthrax cursor-pointer"
                    >
                      COPY LINK <FaLink className="bg-[#caa193] text-black rounded p-[2px]" />
                    </span>

                    <div className="flex items-center gap-2 text-[#caa193]">
                      <span className="text-[#caa193] font-conthrax">SHARE</span>
                      <FaFacebookF
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog('facebook', post.link)}
                      />
                      <FaInstagram
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog('instagram', post.link)}
                      />
                      <FaPinterestP
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog('pinterest', post.link)}
                      />
                      <FaWhatsapp
                        size={14}
                        className="bg-[#caa193] text-black rounded p-[3px] cursor-pointer"
                        onClick={() => shareBlog('whatsapp', post.link)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
           {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/blogs">
            <button className="bg-gradient-to-br from-[#caa193] to-[#a0624d] text-black font-conthrax px-8 py-3 rounded hover:scale-105 transition-transform duration-300 tracking-wider uppercase">
              ALL BLOGS
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
