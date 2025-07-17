import Image from "next/image";
import { IProduct } from "@/lib/fetchProducts";

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
    <section className="flex flex-col justify-between w-full gap-3 p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-103 hover:-translate-y-1 transition-all duration-300 ease-in-out">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          priority
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="text-base sm:text-lg md:text-xl font-medium sm:font-semibold line-clamp-2">
          {title}
        </h3>
        <p className="text-base md:text-lg font-medium text-gray-900">
          {formattedPrice}
        </p>
      </div>
    </section>
  );
};
