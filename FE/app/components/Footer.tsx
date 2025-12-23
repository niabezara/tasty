"use client";

import Link from "next/link";
import Image from "next/image";

type FooterLink = { name: string; link: string };

const tasty: FooterLink[] = [
  { name: "About", link: "/about" },
  { name: "Recipes", link: "/recipes" },
  { name: "Blog", link: "/blog" },
];

const foodAndRecipes: FooterLink[] = [
  { name: "Sugar Free January", link: "/privacy-policy" },
  { name: "Freezer Meals 101", link: "/terms-of-service" },
  { name: "Quick and Easy Recipes", link: "/advertising" },
  { name: "Instant Pot Recipes", link: "/disclosure" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-bold text-gray-900 tracking-wide">
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="text-gray-600 hover:text-orange-600 transition-colors text-sm font-medium"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-orange-500">
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/Logo.png"
              alt="Logo"
              width={140}
              height={140}
              className="mb-4"
            />
            <p className="text-gray-500 text-sm text-center md:text-left">
              Delicious recipes for every occasion
            </p>
          </div>

          {/* Links */}
          <FooterColumn title="Pinch of Yum" links={tasty} />
          <FooterColumn title="Food & Recipes" links={foodAndRecipes} />
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} tasty. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
