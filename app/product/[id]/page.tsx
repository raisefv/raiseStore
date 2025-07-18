// app/product/[id]/page.tsx
import { fetchProductByID, IProduct } from "@/lib/fetchProductByID";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const product = await fetchProductByID(params.id);
  if (!product || !product.title) {
    notFound();
  }

  return <div>Товар с ID: {params.id}</div>;
}
