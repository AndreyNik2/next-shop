"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Heart, User } from "lucide-react";
import Image from "next/image";
import CategoryDrawer from "./CategoryDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-[#F6E768] relative z-50">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-header.svg"
            alt="Stylna kachka logo Стильна качка лого"
            width={100}
            height={70}
            className="transition-all duration-300"
          />
        </Link>

        {/* Іконки справа */}
        <div className="flex items-center space-x-4">
          {/* Пошук */}
          <button aria-label="Пошук" className="text-gray-600 hover:text-black">
            🔍
          </button>

          {/* Лайки */}
          <button
            aria-label="Улюблене"
            className="text-gray-600 hover:text-black"
          >
            <Heart className="w-5 h-5" />
          </button>

          {/* Користувач */}
          <button
            aria-label="Профіль"
            className="text-gray-600 hover:text-black"
          >
            <User className="w-5 h-5" />
          </button>

          {/* Меню */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
            className="text-gray-600 hover:text-black sm:hidden"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Drawer */}
      <CategoryDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
