"use client";
import { fetchProducts, IProduct } from "@/lib/fetchProducts";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []);

  if (isLoading) return <Skeleton />;

  return (
    <div className="flex justify-center px-4 mt-8">
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((e) => (
          <Product
            key={e.id}
            id={e.id}
            title={e.title}
            price={e.price}
            image={e.image}
          />
        ))}
      </section>
    </div>
  );
};
