import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  images: string[];
  gender: string;
  category: string;
};

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Сукня Mango",
    slug: "suknya-mango-1",
    price: 1099,
    images: ["/demo/dress_1.jpg"],
    gender: "women",
    category: "dresses",
  },
  {
    id: "2",
    title: "Футболка Zara",
    slug: "futbolka-zara-1",
    price: 699,
    images: ["/demo/tshirt.jpg"],
    gender: "men",
    category: "tshirts",
  },
  {
    id: "3",
    title: "Спідниця Lefties",
    slug: "spidnytsya-lefties-1",
    price: 899,
    images: ["/demo/skirt.jpg"],
    gender: "women",
    category: "skirts",
  },
  {
    id: "4",
    title: "Літня сукня Mango",
    slug: "suknya-mango-2",
    price: 1099,
    images: ["/demo/dress_2.jpg"],
    gender: "women",
    category: "dresses",
  },
  {
    id: "5",
    title: "Сукня Mango",
    slug: "suknya-mango-3",
    price: 1099,
    images: ["/demo/dress_3.jpg"],
    gender: "women",
    category: "dresses",
  },
];

export default function CategoryPage({
  params,
}: {
  params: { gender: string; subcategory: string };
}) {
  const { gender, subcategory } = params;

  // Фільтруємо товари за категорією
  const filtered = mockProducts.filter(
    (item) =>
      item.gender === gender.toLowerCase() &&
      item.category === subcategory.toLowerCase()
  );

  if (filtered.length === 0) return notFound();

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {gender} / {subcategory}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((product) => (
          <Link
            href={`/product/${product.slug}`}
            key={product.id}
            className="border p-2 hover:shadow transition rounded"
          >
            <Image
              src={product.images[0]}
              alt={product.title}
              className="w-full h-48 object-cover rounded"
              width={400}
              height={600}
            />
            <div className="mt-2 text-sm">{product.title}</div>
            <div className="text-lg font-bold">{product.price} грн</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
