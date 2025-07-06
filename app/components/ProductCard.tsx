import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  price: number;
};

export default function ProductCard({
  id,
  title,
  image,
  price,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="block border rounded-xl p-4 shadow hover:shadow-md transition"
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-pink-600 font-semibold">{price} грн</p>
      </div>
    </Link>
  );
}
