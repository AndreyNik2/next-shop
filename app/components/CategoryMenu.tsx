"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";



const categories: Record<string, string[]> = {
  Жінки: ["Брюки", "Взуття", "Спідниці", "Кофти", "Сукні", "Футболки"],
  Чоловіки: ["Брюки", "Взуття", "Кофти", "Футболки"],
  Дівчата: ["Брюки", "Взуття", "Спідниці", "Кофти", "Сукні", "Футболки"],
  Хлопці: ["Брюки", "Взуття", "Кофти", "Футболки"],
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
        {Object.keys(categories).map((category:string) => (
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
            {categories[activeCategory].map((sub) => (
              <Link
                key={sub}
                href={`/category/${activeCategory.toLowerCase()}/${sub.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition-colors"
              >
                {sub}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
