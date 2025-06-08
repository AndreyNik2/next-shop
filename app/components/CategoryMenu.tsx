"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

type Subcategory = {
  name: string;
  slug: string;
};

const categories: Record<string, Subcategory[]> = {
  Жінки: [
    { name: "Брюки", slug: "pants" },
    { name: "Взуття", slug: "footwear" },
    { name: "Спідниці", slug: "skirts" },
    { name: "Кофти", slug: "sweaters" },
    { name: "Сукні", slug: "dresses" },
    { name: "Футболки", slug: "tshirts" },
  ],
  Чоловіки: [
    { name: "Брюки", slug: "pants" },
    { name: "Взуття", slug: "footwear" },
    { name: "Кофти", slug: "sweaters" },
    { name: "Футболки", slug: "tshirts" },
  ],
  Дівчата: [
    { name: "Брюки", slug: "pants" },
    { name: "Взуття", slug: "footwear" },
    { name: "Спідниці", slug: "skirts" },
    { name: "Кофти", slug: "sweaters" },
    { name: "Сукні", slug: "dresses" },
    { name: "Футболки", slug: "tshirts" },
  ],
  Хлопці: [
    { name: "Брюки", slug: "pants" },
    { name: "Взуття", slug: "footwear" },
    { name: "Кофти", slug: "sweaters" },
    { name: "Футболки", slug: "tshirts" },
  ],
};

const categorySlug = (ua: string) => {
  switch (ua) {
    case "Жінки":
      return "women";
    case "Чоловіки":
      return "men";
    case "Дівчата":
      return "girls";
    case "Хлопці":
      return "boys";
    default:
      return "";
  }
};

export default function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="w-full border-b bg-white">
      {/* Горизонтальне меню */}
      <nav className="flex overflow-x-auto justify-around px-4 py-2 text-sm font-medium">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={clsx(
              "px-2 py-1 transition-colors",
              activeCategory === category
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            )}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Випадаючий список субкатегорій */}
      {activeCategory && (
        <div className="bg-gray-50 border-t px-4 py-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            {categories[activeCategory].map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/${categorySlug(activeCategory)}/${slug}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
