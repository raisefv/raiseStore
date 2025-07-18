import Image from "next/image";
import { IProduct } from "@/lib/fetchAllProducts";
import Link from "next/link";
import { Title } from "./title";

export const Product = ({ id, title, price, image }: IProduct) => {
  const formatPriceUSD = (price: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const formattedPrice: string = formatPriceUSD(price);

  return (
    <Link href={`/product/${id}`}>
      <section className="flex flex-col w-full p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-shadow duration-300 ease-in-out h-full">
        <div className="relative w-full aspect-square mb-3">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-between flex-1 overflow-hidden">
          <Title
            text={title}
            size="sm"
            className="line-clamp-2 overflow-hidden text-sm sm:text-base md:text-lg font-medium"
          />
          <Title
            text={formattedPrice}
            size="xs"
            className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800"
          />
        </div>
      </section>
    </Link>
  );
};
