import { ProductList } from "@/components/shared/Product-list";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* welcome секция */}
      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-8">
        <Link href="#">
          <section className="flex flex-col gap-2 items-center">
            <span className="font-semibold text-xl">ПОПУЛЯРНЫЕ БРЕНДЫ</span>
            <span className="text-center">
              Собрали подборку
              <br />
              из новинок недели моды
            </span>
          </section>
        </Link>
        <Link href="#">
          <Image src={"/swag.webp"} alt="swag" width={320} height={320} />
        </Link>
      </div>

      {/* карточки продуктов */}
      <ProductList />
    </div>
  );
}
