"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

const extraLinks = [
  { name: "Доставка", href: "/delivery" },
  { name: "Оплата", href: "/payment" },
  { name: "Улюблені", href: "/favorites" },
  { name: "Увійти / Вийти", href: "/login" },
];

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

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CategoryDrawer({ isOpen, onClose }: Props) {
  const [active, setActive] = useState("Жінки");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      {/* Бекдроп */}
      <div
        onClick={onClose}
        className={clsx(
          "fixed inset-0 bg-opacity-40 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Drawer */}
      <div
        className={clsx(
          "fixed left-0 top-24 z-40 w-full max-w-md",
          "h-[calc(100vh-96px)]", // 64px = header
          "bg-[#FCF297] shadow-md overflow-y-auto",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4">
          {/* Горизонтальне меню */}
          <div className="flex justify-around mb-4 border-b pb-2">
            {Object.keys(categories).map((group) => (
              <button
                key={group}
                onClick={() => setActive(group)}
                className={clsx(
                  "uppercase font-semibold text-sm",
                  active === group
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500"
                )}
              >
                {group}
              </button>
            ))}
          </div>

          {/* Підкатегорії */}
          <nav className="flex flex-col gap-2 mb-6">
            {categories[active].map((item) => (
              <Link
                key={item.slug}
                href={`/category/${categorySlug(active)}/${item.slug}`}
                className="text-black hover:underline"
                onClick={onClose}
              >
                — {item.name}
              </Link>
            ))}
          </nav>

          {/* Додаткові пункти */}
          <div className="border-t pt-4">
            {extraLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-black text-sm mb-2"
                onClick={onClose}
              >
                — {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
