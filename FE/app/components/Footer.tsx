"use client";

import Link from "next/link";
import Image from "next/image";

type FooterLink = { name: string; link: string };

const pinchOfYum: FooterLink[] = [
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

// Reusable Footer Column
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-semibold uppercase">{title}</h3>
      <ul className="flex flex-col gap-1">
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.link}
              className="text-gray-700 hover:text-orange-500 transition-colors"
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
    <footer className="bg-gray-50 py-12 px-6 lg:px-24">
      <div className="flex max-w-6xl mx-auto justify-between">
        <FooterColumn title="Pinch of Yum" links={pinchOfYum} />
        <FooterColumn title="Food & Recipes" links={foodAndRecipes} />
      </div>
      <Image
        src="/Logo.png"
        alt="Logo"
        width={150}
        height={150}
        className="mx-auto mt-4"
      />
      <p className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} tasty. All rights reserved.
      </p>
    </footer>
  );
}
